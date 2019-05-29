import { Component, Input, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'jhi-endereco',
    templateUrl: 'endereco.component.html',
})
@Injectable({ providedIn: 'root' })
export class EnderecoComponent {
    @Input('iesimoEndereco')
    public enderecoForm: FormGroup;


    adicionarEndereco(editForm: FormGroup, fb: FormBuilder ) {
        const enderecosArr = <FormArray>editForm.controls['enderecos'];
        const endereco = this.iniciarEndereco(fb);
        enderecosArr.push(endereco);
    }

    iniciarEndereco(fb: FormBuilder) {
        return fb.group({
            rua: ['', Validators.required],
            cep: [''],
            telefone: ['', Validators.pattern('^[0-9]{2}.?[0-9]{5}-?[0-9]{4}$')]
        });
    }


}
