import {Customer} from '../models/customer';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  customerSubject = new Subject<Customer[]>();


  constructor(
    private httpClient: HttpClient
  ) {
  }


  private customers: Customer[] = [];


  emitCustomerSubject() {
    this.customerSubject.next(this.customers.slice());
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: Customer) {
    this.httpClient
      .post('http://localhost:8080/api/customers', customer)
      .subscribe(
        () => {
          this.customers.push(customer);
          this.emitCustomerSubject();
        },
        (error) => {
          alert('fail: ' + error);
        }
      );
  }

  getFromServer() {
    this.httpClient
      .get<any[]>('http://localhost:8080/api/customers')
      .subscribe(
        (response) => {
          this.customers = response;
          this.emitCustomerSubject();
        },
        (error) => {
          alert('fail: ' + error);
        }
      );
  }
}
