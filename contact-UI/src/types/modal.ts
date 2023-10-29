import { Contacts } from "./card";

export interface ModalProps {
  className?: string;
  show: boolean;
  onHide: () => void;
  contact: Contacts;
}
export type InputField = {
  key: keyof Contacts;
  type: "email" | "text" | "number";
  label: string;
};
