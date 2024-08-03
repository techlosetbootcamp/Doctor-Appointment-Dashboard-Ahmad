"use client";
import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./slices/taskSlice";
import PatientReducer from "./slices/patientSlice";
import DeletePatientReducer from "./slices/deletePatientSlice";
import UpdatePatientReducer from "./slices/updatePatientSlice";
import UpdateTaskReducer from "./slices/updateTaskSlice";
import DeleteTaskReducer from "./slices/deleteTaskSlice";
import CurrentUserReducer from "./slices/userSlice";
import AddAppointmentReducer from "./slices/addAppointmentSlice";
import GetAppointmentReducer from "./slices/getAppointmentSlice";
import UpdateUserReducer from "./slices/getAppointmentSlice";
export const store = configureStore({
  reducer: {
    task: TaskReducer,
    patient: PatientReducer,
    deletePatient: DeletePatientReducer,
    updatePatient: UpdatePatientReducer,
    deleteTask: DeleteTaskReducer,
    updateTask: UpdateTaskReducer,
    currentUser: CurrentUserReducer,
    addAppointment: AddAppointmentReducer,
    getAppointment: GetAppointmentReducer,
    updateUser: UpdateUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
