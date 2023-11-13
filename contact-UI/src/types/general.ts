export interface Props {
  className?: string;
}

export interface FormProps {
  className?: string;
  isAdding: boolean;
  cancelIsAdding: (isAdding: boolean) => void;
}

export interface User {
  username: string;
  password: string;
  roles: string[];
}
