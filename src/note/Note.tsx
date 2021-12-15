import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Note = ({ children }: Props) => (
  <span>
    <strong>{children}</strong> / 20
  </span>
);
export default Note;
