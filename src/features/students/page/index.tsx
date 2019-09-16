import * as React from "react";
import styled from "styled-components";
import { StudentsList } from "./list";
import { StudentsForm } from "./form";

const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
`;

export const StudentsPage: React.FC = () => {
  return (
    <PageWrapper>
      <StudentsList />
      <StudentsForm />
    </PageWrapper>
  );
};
