export type FormTy = "datepicker" | "password" | "input" | "select";
export default interface IwjForm {
  field: string;
  type: FormTy;
  label: string;
  rules?: any[];
  placeholder?: string;
  options?: any[];
  otherOptions?: any;
  isHidden?: Boolean;
}
