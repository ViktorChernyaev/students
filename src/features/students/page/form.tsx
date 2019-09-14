import * as React from "react";
import { useStore } from "effector-react";
import { $form, $isFormOpened, setValue, closeForm, saveForm } from "../service";

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
      <input type="text" name="name" value={form.name} onChange={handler} placeholder="fio" />
      <input type="text" name="date" value={form.date} onChange={handler} placeholder="birthday" />
      <input type="text" name="rating" value={form.rating} onChange={handler} placeholder="rating" />
      <input type="submit" value="submit" />
      <input type="button" value="cancel" onClick={() => closeForm()} />
    </form>
  );
};
