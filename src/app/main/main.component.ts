import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from '../services/customerService';
import {Subscription} from 'rxjs';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  filter = '';
  customers: Customer[];
  customersSubscription: Subscription;


  constructor(private clients: CustomerService) {
  }

  ngOnInit() {
    this.clients.getFromServer();
    this.customersSubscription = this.clients.customerSubject.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
    this.clients.emitCustomerSubject();
  }

  sortByFirstName() {
    this.customers = this.customers
      .sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
    this.filter = 'FirstName';
  }

  sortByLastName() {
    this.customers = this.customers
      .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
    this.filter = 'LastName';
  }

  sortByAddress() {
    this.customers = this.customers
      .sort((a, b) => (a.address > b.address) ? 1 : ((b.address > a.address) ? -1 : 0));
    this.filter = 'Address';
  }

  sortByCity() {
    this.customers = this.customers
      .sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0));
    this.filter = 'City';
  }

  sortByState() {
    this.customers = this.customers
      .sort((a, b) => (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0));
    this.filter = 'State';
  }

  sortByOrder() {
    this.customers = this.customers
      .sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    this.filter = 'Order';
  }

  ngOnDestroy() {
    this.customersSubscription.unsubscribe();
  }

}
