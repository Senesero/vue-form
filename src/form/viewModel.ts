import { getActualDate } from "../utils/utils";

interface FormData {
  dateIncident: string;
  severity: string;
  typeIncident: string;
  notify: string;
  dateOpening: string;
  employeeOpening: string;
  notesOpening: string;
  dateClosing: string;
  employeeClosing: string;
  notesClosing: string;
}

const createEmptyFormData = (): FormData => ({
  dateIncident: getActualDate(),
  severity: '',
  typeIncident: '',
  notify: '',
  dateOpening: '',
  employeeOpening: '',
  notesOpening: '',
  dateClosing: '',
  employeeClosing: '',
  notesClosing: '',
});

export { FormData, createEmptyFormData };
