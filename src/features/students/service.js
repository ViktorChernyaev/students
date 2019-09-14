import { createStore, createEvent, createEffect } from "effector";
import { addIdToObj } from "lib/id";
import { getStorageData, setStorageData } from "lib/storage";

export const $students = createStore([]);
export const getStudentsList = createEffect("fetch students list");

$students.on(getStudentsList.done, (_, { result }) => result);
getStudentsList.use(async () => {
  const students = await getStorageData("students");
  return students || [];
});

const EMPTY_FORM = { name: "", date: "", rating: "" };
export const $form = createStore(EMPTY_FORM);
export const $isFormOpened = $form.map(form => "i" in form);
export const openForm = createEvent("open form");
export const closeForm = createEvent("open form");
export const setValue = createEvent("set value");

export const saveForm = createEffect("save form state");
export const deleteStudent = createEffect("delete student");

$form
  .on(openForm, (_, data) => data || addIdToObj(EMPTY_FORM))
  .on(setValue, (store, data) => ({ ...store, [data.name]: data.value }))
  .reset(saveForm.done, closeForm);

saveForm.use(e => {
  e.preventDefault();
  const students = $students.getState();
  const current = $form.getState();
  const isPresents = students.find(student => student.i === current.i);
  const studentsToSave = isPresents
    ? students.map(student => student.i === current.i ? current : student)
    : students.concat(current);
  return setStorageData("students", studentsToSave);
});

deleteStudent.use(studentToDel => {
  const studentsToSave = $students.getState().filter(student => student.i !== studentToDel.i);
  return setStorageData("students", studentsToSave);
});

saveForm.done.watch(getStudentsList);
deleteStudent.done.watch(getStudentsList);
