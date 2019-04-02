export class Customer {

  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  address: string;
  city: string;
  state: string;
  order: string;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    address: string,
    city: string,
    state: string,
    order: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.order = order;
  }


}
