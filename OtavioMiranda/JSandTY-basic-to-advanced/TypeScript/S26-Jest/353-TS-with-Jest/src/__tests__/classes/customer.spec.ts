import { IndividualCustomer, EnterpriseCustomer } from '../../classes/customer';

// INDIVIDUAL CUSTOMER
const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

// ENTERPRISE
const createEnterpriseCustomer = (
  name: string,
  fantasyName: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, fantasyName, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});
describe('IndividualCustomer', () => {
  it('should have name, lastname and cpf', () => {
    const sut = createIndividualCustomer('LUCAS', 'MEDEIROS', '062.234.234-32');

    expect(sut).toHaveProperty('firstName', 'LUCAS');
    expect(sut).toHaveProperty('lastName', 'MEDEIROS');
    expect(sut).toHaveProperty('cpf', '062.234.234-32');
  });

  it('should have methods to getName and getIDN for individual customers', () => {
    const sut = createIndividualCustomer('Lucas', 'Medeiros', '062.234.234-32');

    expect(sut.getName()).toBe('Lucas Medeiros');
    expect(sut.getIDN()).toBe('062.234.234-32');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name, fantasyName and cnpj', () => {
    const sut = createEnterpriseCustomer(
      'L 3 A VARIEDADES',
      'Lucas Medeiros',
      '062.234.234/0001-32',
    );

    expect(sut).toHaveProperty('name', 'Lucas Medeiros');
    expect(sut).toHaveProperty('fantasyName', 'L 3 A VARIEDADES');
    expect(sut).toHaveProperty('cnpj', '062.234.234/0001-32');
  });
  it('should have methods to getName and getIDN for enterprise customers', () => {
    const sut = createEnterpriseCustomer(
      'L 3 A VARIEDADES',
      'Lucas Medeiros',
      '062.234.234/0001-32',
    );
    expect(sut.getName()).toBe('L 3 A VARIEDADES Lucas Medeiros');
    expect(sut.getIDN()).toBe('062.234.234/0001-32');
  });
});
