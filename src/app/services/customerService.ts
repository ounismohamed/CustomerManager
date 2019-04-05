import {Customer} from '../models/customer';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  customerSubject = new Subject<Customer[]>();

  path = 'http://localhost:8080/api/customers';


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
      .post(this.path, customer)
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

  updateCustomer(customer: Customer, index: number) {
    this.httpClient
      .put(this.path + '/' + index, customer)
      .subscribe(
        () => {
          this.customers[index] = customer;
          this.emitCustomerSubject();
        },
        (error) => {
          alert('fail: ' + error);
        }
      );
  }

  getFromServer() {
    this.httpClient
      .get<any[]>(this.path)
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
