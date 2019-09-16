import * as React from "react";
import { useStore } from "effector-react";
import styled from "styled-components";
import { Panel } from "ui/panel";
import { Button } from "ui/button";
import { Spinner } from "ui/spinner";
import { $students, getStudentsList, openForm, deleteStudent } from "../service";

const HalfedPanel = styled(Panel)`
  max-width: 60%;

  @media only screen and (max-width: 800px) {
    max-width: 100%;
    margin: 0 0 15px;
  }
`;
const HeadedButton = styled(Button)`
  margin-bottom: 15px;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Td = styled.td`
  border: 1px solid #e4e7ea;
  padding: 15px 10px;
  font-size: 12px;
  font-weight: 14px;
`;
const Link = styled.span`
  margin-left: 5px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const StudentsList: React.FC = () => {
  const students = useStore($students);
  const loading = useStore(getStudentsList.pending);

  React.useEffect(() => {
    getStudentsList();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <HalfedPanel>
      <HeadedButton onClick={() => openForm()} value="CREATE" readOnly />
      <Table>
        <thead>
          <tr>
            <Td as="th">Имя</Td>
            <Td as="th">Дата рождения</Td>
            <Td as="th">Оценка</Td>
            <Td as="th">Действия</Td>
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            return (
              <tr key={student.i}>
                <Td>{student.name}</Td>
                <Td>{student.date}</Td>
                <Td>{student.rating}</Td>
                <Td>
                  <Link onClick={() => openForm(student)}>edit</Link>
                  <Link onClick={() => deleteStudent(student)}>del</Link>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </HalfedPanel>
  );
};
