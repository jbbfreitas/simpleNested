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

  constructor(private fb: FormBuilder, public enderecoComponent: EnderecoComponent) { }

  ngOnInit() {
      this.editForm = this.fb.group({
          nome: ['', [Validators.required, Validators.minLength(5)]],
          enderecos: this.fb.array([])
      });
      // adiciona um primeiro endereco
      this.adicionarEndereco();

      /* subscribe para alterações nos valores dos enderecos */
      this.editForm.controls['enderecos'].valueChanges.subscribe(x => {
         console.log(x);
       });
  }


  removerEndereco(i: number) {
      const enderecosArr = <FormArray>this.editForm.controls['enderecos'];
      enderecosArr.removeAt(i);
  }

  adicionarEndereco() {
    this.enderecoComponent.adicionarEndereco(this.editForm, this.fb);
  }

  save(model: Customer) {
      // chama a API para salvar
      // ...
      console.log(this.editForm);
  }
}