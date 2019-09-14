import * as React from "react";
import { useStore } from "effector-react";
import { $students, getStudentsList, openForm, deleteStudent } from "../service";

export const StudentsList: React.FC = () => {
  const students = useStore($students);
  const loading = useStore(getStudentsList.pending);

  React.useEffect(() => {
    getStudentsList();
  }, []);

  if (loading) {
    return <div>loading...</div>;
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
