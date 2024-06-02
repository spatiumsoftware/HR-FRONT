export interface Icompany {
  message: any;
  result: Result[];
}

export interface Result {
  id: string;
  name: string;
  companyType: string;
  commerialRegisterationNumber: string;
  logoPath: string;
  companyCategory: string;
  employeeNumber: number;
  ceo: string;
}
