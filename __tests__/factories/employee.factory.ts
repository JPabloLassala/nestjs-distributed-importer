import { Employee } from 'src/domain/interfaces';
import { address, datatype, date, internet, name, phone } from 'faker';

export const getFakeEmployee = (
  id: number,
  superior: Employee | null,
): Employee => ({
  id: id || datatype.number(),
  lastName: name.lastName(),
  firstName: name.firstName(),
  address: address.streetAddress(),
  birthDate: date.soon(),
  hireDate: date.past(),
  city: address.cityName(),
  country: address.country(),
  email: internet.email(),
  fax: phone.phoneNumber(),
  phone: phone.phoneNumber(),
  postalCode: address.zipCode(),
  state: address.state(),
  title: name.jobDescriptor(),
  reportsTo: superior || null,
});

export const getFakeEmployeeArray = (length?: number): Employee[] => {
  const employeeArray: Employee[] = [...new Array(length || 200)].map(
    (row, i) => getFakeEmployee(i, null),
  );

  return employeeArray.map((em, i): Employee => {
    if (i % 3 === 0) return { ...em, reportsTo: employeeArray[i + 1] };
    if (i % 3 === 1) return { ...em, reportsTo: employeeArray[i + 1] };
    return em;
  });
};
