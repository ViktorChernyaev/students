import * as React from "react";
import { useStore } from "effector-react";
import styled from "styled-components";
import { Panel } from "ui/panel";
import { Button } from "ui/button";
import { Input, Label } from "ui/input";
import { $form, $isFormOpened, setValue, closeForm, saveForm } from "../service";
import { datePattern, ratingPattern } from "../types";

const HalfedPanel = styled(Panel)`
  max-width: calc(40% - 15px);
  margin-left: 15px;

  @media only screen and (max-width: 800px) {
    max-width: 100%;
    margin-left: 0;
  }
`;
const InlineButton = styled(Button)`
  display: inline-block;
  margin: 0 10px 10px 0;
`;

export const StudentsForm: React.FC = () => {
  const form = useStore($form);
  const isFormOpened = useStore($isFormOpened);

  if (!isFormOpened) return null;

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue({ name, value });
  };

  return (
    <HalfedPanel>
      <form onSubmit={saveForm}>
        <Label>
          <div>ФИО</div>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handler}
            required
          />
        </Label>
        <Label>
          <div>День рождения(YYYY-MM-DD)</div>
          <Input
            type="text"
            name="date"
            value={form.date}
            onChange={handler}
            pattern={datePattern}
            required
          />
        </Label>
        <Label>
          <div>Оценка(5|4|3|2)</div>
          <Input
            type="text"
            name="rating"
            value={form.rating}
            onChange={handler}
            pattern={ratingPattern}
            required
          />
        </Label>
        <InlineButton as="input" type="submit" value="SUBMIT" />
        <InlineButton as="input" type="button" value="CANCEL" onClick={() => closeForm()} />
      </form>
    </HalfedPanel>
  );
};
