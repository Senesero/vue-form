import { mockemployees } from './mockData';

let employees = mockemployees;

export const fetchRecipeById = (employee: string): Promise<string> => {
  const employeesFound: string[] = []
  employees.forEach(emp => {
    if(emp.toUpperCase().includes(employee.toUpperCase())) {
      employeesFound.push(emp)
    }
  });
  if(employeesFound.length === 1) {
    return Promise.resolve(employeesFound[0]);
  }
  
  return Promise.resolve('');
};