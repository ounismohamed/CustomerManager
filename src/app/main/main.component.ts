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
  customersTmp: Customer[];
  customersSubscription: Subscription;

  firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
  lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
  addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
  cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
  stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
  orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';


  constructor(private clients: CustomerService) {
  }

  ngOnInit() {
    this.clients.getFromServer();
    this.customersSubscription = this.clients.customerSubject.subscribe(
      (customers: Customer[]) => {
        this.customersTmp = customers;
        this.customers = customers;
      }
    );
    this.clients.emitCustomerSubject();
  }

  sortByFirstName() {
    this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    if (this.firstNameButton.includes('glyphicon-option-horizontal') || this.firstNameButton.includes('top')) {
      this.firstNameButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
    } else {
      this.firstNameButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.firstName < b.firstName) ? 1 : ((b.firstName < a.firstName) ? -1 : 0));
    }
  }

  sortByLastName() {
    this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    if (this.lastNameButton.includes('glyphicon-option-horizontal') || this.lastNameButton.includes('top')) {
      this.lastNameButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
    } else {
      this.lastNameButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.lastName < b.lastName) ? 1 : ((b.lastName < a.lastName) ? -1 : 0));
    }
  }

  sortByAddress() {
    this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    if (this.addressButton.includes('horizontal') || this.addressButton.includes('top')) {
      this.addressButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.address > b.address) ? 1 : ((b.address > a.address) ? -1 : 0));
    } else {
      this.addressButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.address < b.address) ? 1 : ((b.address < a.address) ? -1 : 0));
    }
  }

  sortByCity() {
    this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    if (this.cityButton.includes('horizontal') || this.cityButton.includes('top')) {
      this.cityButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0));
    } else {
      this.cityButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.city < b.city) ? 1 : ((b.city < a.city) ? -1 : 0));
    }
  }

  sortByState() {
    this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.orderButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    if (this.stateButton.includes('horizontal') || this.stateButton.includes('top')) {
      this.stateButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0));
    } else {
      this.stateButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.state < b.state) ? 1 : ((b.state < a.state) ? -1 : 0));
    }
  }

  sortByOrder() {
    this.lastNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.addressButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.cityButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.stateButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    this.firstNameButton = '<span class="arrow glyphicon glyphicon-option-horizontal"></span>';
    if (this.orderButton.includes('horizontal') || this.orderButton.includes('top')) {
      this.orderButton = '<span class="arrow glyphicon glyphicon-triangle-bottom"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    } else {
      this.orderButton = '<span class="arrow glyphicon glyphicon-triangle-top"></span>';
      this.customersTmp = this.customersTmp
        .sort((a, b) => (a.order < b.order) ? 1 : ((b.order < a.order) ? -1 : 0));
    }
  }

  ngOnDestroy() {
    this.customersSubscription.unsubscribe();
  }

  applicateFilter() {
    this.customersTmp = this.customers;
    this.customersTmp = this.customersTmp.filter(s => this.contains(s, this.filter));
  }

  contains(customer: Customer, sequence: string): boolean {
    return customer.firstName.includes(sequence) ||
      customer.lastName.includes(sequence) ||
      customer.gender.includes(sequence) ||
      customer.email.includes(sequence) ||
      customer.address.includes(sequence) ||
      customer.city.includes(sequence) ||
      customer.state.includes(sequence) ||
      customer.order.includes(sequence);
  }

}
