export interface Employee {
  id: number;
  lastName: string;
  firstName: string;
  title: string;
  reportsTo: Employee | null;
  birthDate: Date;
  hireDate: Date;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  fax: string;
  email: string;
}
