export interface Props {
  className?: string;
}

export interface FormProps {
  className?: string;
  isAdding: boolean;
  cancelIsAdding: (isAdding: boolean) => void;
}
