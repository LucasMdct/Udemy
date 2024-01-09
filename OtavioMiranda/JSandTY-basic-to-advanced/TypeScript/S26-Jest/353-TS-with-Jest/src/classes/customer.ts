import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  fantasyName: string;
  name: string;
  cnpj: string;

  constructor(fantasyName: string, name: string, cnpj: string) {
    this.name = name;
    this.fantasyName = fantasyName;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.fantasyName + ' ' + this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
