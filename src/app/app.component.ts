import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Customer } from './customer.interface';
import { EnderecoComponent } from './endereco.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public editForm: FormGroup;

  constructor(private fb: FormBuilder, public enderecoComponente: EnderecoComponent) { }

  ngOnInit() {
      this.editForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          addresses: this.fb.array([])
      });
      // add address
      this.addAddress();

      /* subscribe to addresses value changes */
      // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
      //   console.log(x);
      // })
  }


  removeAddress(i: number) {
      const control = <FormArray>this.editForm.controls['addresses'];
      control.removeAt(i);
  }

  addAddress() {
    this.enderecoComponente.addAddress(this.editForm, this.fb);
  }

  save(model: Customer) {
      // call API to save
      // ...
      console.log(this.editForm);
  }
}