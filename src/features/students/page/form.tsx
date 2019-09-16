import * as React from "react";
import { useStore } from "effector-react";
import { $form, $isFormOpened, setValue, closeForm, saveForm } from "../service";
import { datePattern, ratingPattern } from "../types";

export const StudentsForm: React.FC = () => {
  const form = useStore($form);
  const isFormOpened = useStore($isFormOpened);

  if (!isFormOpened) return null;

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue({ name, value });
  };

  return (
    <form onSubmit={saveForm}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handler}
        placeholder="ФИО"
        required
      />
      <input
        type="text"
        name="date"
        value={form.date}
        onChange={handler}
        placeholder="День рождения(DD/MM/YYYY)"
        pattern={datePattern}
        required
      />
      <input
        type="text"
        name="rating"
        value={form.rating}
        onChange={handler}
        placeholder="Оценка(5|4|3|2)"
        pattern={ratingPattern}
        required
      />
      <input type="submit" value="submit" />
      <input type="button" value="cancel" onClick={() => closeForm()} />
    </form>
  );
};
