import {Customer} from '../models/customer';
import {Subject} from 'rxjs';

export class CustomerService {

  customerSubject = new Subject<Customer[]>();


  private customers: Customer[] = [
    new Customer('Maria',
                'Lagertha', 'Female',
                'maria@gmail.com',
                'Rueil',
                'Paris',
                'Paris',
                '$5.196'),
    new Customer('Grace',
                'Anne', 'Female',
                'anne@gmail.com',
                'Cesar palace',
                'Los Angeles',
                'California',
                '$9.196')];

  emitCustomerSubject() {
    this.customerSubject.next(this.customers.slice());
  }

  getCustomers(){
    return this.customers;
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.emitCustomerSubject();
  }
}
