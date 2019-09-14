import * as React from "react";
import { StudentsList } from "./list";
import { StudentsForm } from "./form";

export const StudentsPage: React.FC = () => {
  return (
    <>
      <StudentsList />
      <StudentsForm />
    </>
  );
};
