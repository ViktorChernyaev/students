import { SyntheticEvent } from "react";
import { createDomain } from "effector";
import { addIdToObj } from "lib/id";
import { getStorageData, setStorageData } from "lib/storage";
import { Student, Inputvalue, RATING_PERFECT } from "./types";

const StudentsDomain = createDomain();

export const $students = StudentsDomain.store<Student[]>([]);
export const getStudentsList = StudentsDomain.effect<void, Student[]>("fetch students list");

$students.on(getStudentsList.done, (_, { result }) => result);
getStudentsList.use(() => {
  return getStorageData("students").then((students: Student[]) => students || []);
});

const EMPTY_FORM: Student = { name: "", date: "", rating: RATING_PERFECT };
export const $form = StudentsDomain.store<Student>(EMPTY_FORM);
export const $isFormOpened = $form.map(form => "i" in form);
export const openForm = StudentsDomain.event<void | Student>("open form");
export const closeForm = StudentsDomain.event<void>("open form");
export const setValue = StudentsDomain.event<Inputvalue>("set value");

export const saveForm = StudentsDomain.effect<SyntheticEvent, void>("save form state");
export const deleteStudent = StudentsDomain.effect<Student, void>("delete student");

$form
  .on(openForm, (_, data: void | Student) => data || addIdToObj(EMPTY_FORM))
  .on(setValue, (store: Student, data: Inputvalue) => ({ ...store, [data.name]: data.value }))
  .reset(saveForm.done, closeForm);

saveForm.use((e: SyntheticEvent) => {
  e.preventDefault();
  const students: Student[] = $students.getState();
  const current: Student = $form.getState();
  const isPresents: void | Student = students.find(student => student.i === current.i);
  const studentsToSave: Student[] = isPresents
    ? students.map(student => student.i === current.i ? current : student)
    : students.concat(current);
  return setStorageData("students", studentsToSave);
});

deleteStudent.use((studentToDel: Student) => {
  const studentsToSave: Student[] = $students.getState().filter(student => student.i !== studentToDel.i);
  return setStorageData("students", studentsToSave);
});

saveForm.done.watch(() => getStudentsList());
deleteStudent.done.watch(() => getStudentsList());
