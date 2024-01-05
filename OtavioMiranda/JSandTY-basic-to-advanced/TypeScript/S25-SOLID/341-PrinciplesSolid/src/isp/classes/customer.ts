import {
  IndividualCustomer,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class individualCustomer implements IndividualCustomer {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  fantasyName: string;
  name: string;
  cnpj: string;

  constructor(fantasyName: string, name: string, cnpj: string) {
    this.name = name;
    this.fantasyName = fantasyName;
    this.cnpj = cnpj;
  }
}
