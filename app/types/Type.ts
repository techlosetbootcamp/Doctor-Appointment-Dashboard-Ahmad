import Task from "../(Dashboard)/components/task/Task";

export type MenuProps = { title: string };
export type TodoTypes = {
  id: string;
  title: string;
  description: string;
  date: Date;
  completed: boolean;
  userId: string | null;
};
export type taskState = {
  tasks: TodoTypes[];
  isLoading: boolean;
  isError: string | null;
};
export type AddPatientTypes = {
  onClose: () => void;
  isUpdate?: boolean;
  id?: string;
  patient?: Patient;
};
export type AddTodoTypes = {
  onClose: () => void;
  isUpdate?: boolean;
  data?: Task;
};
export type AddAppointmentTypes = {
  onClose: () => void;
  isUpdate?: boolean;
  data?: Appointment;
};
export enum PatientStatusType {
  ONGOING = "ONGOING",
  RECOVERED = "RECOVERED",
  WAITING = "WAITING",
}
export const PatientStatus = {
  ONGOING: "ONGOING",
  RECOVERED: "RECOVERED",
  WAITING: "WAITING",
};
export const TodoStatus = {
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};
export type Task = {
  title: string;
  description: string;
  completed: string;
  date?: string | number;
  id?: string;
};
export type initalStateTypes = {
  task: Task[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string | null;
};

export type Patient = {
  id?: string;
  name?: string;
  diagnosis?: string;
  profileImage?: string | null;
  status?: String;
  appointmentDate?: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
export type patientInitialState = {
  patient: Patient[];
  isLoading: boolean;
  isError: boolean;
};
export enum AppointmentTypes {
  Online_Consultation = "Online_Consultation",
  Offline_Consultation = "Offline_Consultation",
}
export const AppointmentType = {
  Online_Consultation: "Online_Consultation",
  Offline_Consultation: "Offline_Consultation",
};

export type Appointment = {
  name?: string;
  id?: string;
  start?: string;
  end?: string;
  purpose?: string;
  appointmentType?: AppointmentTypes;
  status?: string;
};
export type AppointmentInitialState = {
  appointment: Appointment[];
  isLoading: boolean;
  isError: boolean;
};
export type UserInfo = {
  id: string;
  email: string | null;
  name: string | null;
  password?: string | null;
  image?: string | null;
  companyName: string | null;
  profileImage?: string | null;
  resetToken?: string | null;
  resetTokenExpiry?: Date | null;
  emailVerified?: Date | null;
};

export type InputTwoTypes = {
  label: string;
  placeHolder?: string;
  type?: string;
  name: string;
  id: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  sup?: boolean;
};
export type CheckBoxProps<T> = {
  options: T[];
  selectedOption: T;
  setSelectedOption: (option: T) => void;
  label: string;
};
export type UserState = {
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
};
export type ProfileInputProps = {
  type: string;
  name: string;
  id: string;
  value: string;
  readonly?: boolean;
  onChange: (value: string) => void;
  label: string;
  htmlFor: string;
  required?: boolean;
  hidden?: boolean;
};
