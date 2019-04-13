import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../services/customerService';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customerForm: FormGroup;
  update: boolean;
  updateButton: string;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initForm();
    if (this.route.snapshot.params.id) {
      this.update = true;
      this.updateButton = 'Update';

      const i = this.route.snapshot.params.id;
      this.customerForm.controls.firstName.setValue(this.customerService.getCustomers()[i].firstName);
      this.customerForm.controls.lastName.setValue(this.customerService.getCustomers()[i].lastName);
      this.customerForm.controls.gender.setValue(this.customerService.getCustomers()[i].gender);
      this.customerForm.controls.email.setValue(this.customerService.getCustomers()[i].email);
      this.customerForm.controls.address.setValue(this.customerService.getCustomers()[i].address);
      this.customerForm.controls.city.setValue(this.customerService.getCustomers()[i].city);
      this.customerForm.controls.state.setValue(this.customerService.getCustomers()[i].state);
      this.customerForm.controls.order.setValue(this.customerService.getCustomers()[i].order);
    } else {
      this.update = false;
      this.updateButton = 'Add';
    }

  }

  initForm() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      order: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }


  onSubmitForm() {
    const formValue = this.customerForm.value;
    const newCustomer = new Customer(
      formValue.firstName,
      formValue.lastName,
      formValue.gender,
      formValue.email,
      formValue.address,
      formValue.city,
      formValue.state,
      formValue.order);
    if (this.update == false) {
      this.customerService.addCustomer(newCustomer);
    } else {
      let i = this.route.snapshot.params.id;
      this.customerService.updateCustomer(newCustomer, i);
    }
    this.router.navigate(['']);
  }

}
