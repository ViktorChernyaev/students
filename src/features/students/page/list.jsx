import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { $students, getStudentsList, openForm, deleteStudent } from "../service";

export const StudentsList = () => {
  const students = useStore($students);
  const loading = useStore(getStudentsList.pending);

  useEffect(() => {
    getStudentsList();
  }, []);

  if (loading) {
    return "loading...";
  }

  return (
    <>
      <div onClick={() => openForm()}>CREATE</div>
      {students.map(student => {
        return (
          <div key={student.i}>
            <span>{student.name} {student.date} {student.rating}</span>{" "}
            <span onClick={() => openForm(student)}>edit</span>{" "}
            <span onClick={() => deleteStudent(student)}>del</span>
          </div>
        );
      })}
    </>
  );
};
