import { PropOptions } from 'vue';
import { FormData } from './viewModel';

export interface FormProps {
  formData: PropOptions<FormData>;
  updateFormData: PropOptions<(field:string, data: FormData) => void>;
  registerIncident: PropOptions<() => void>;
  closeModal: PropOptions<() => void>;
  searchEmployee: PropOptions<(field: string, employee: string) => void>
  isOpening: PropOptions<boolean>;
  text: PropOptions<string>;
}
