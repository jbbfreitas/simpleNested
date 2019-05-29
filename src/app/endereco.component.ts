import { Component, Input, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'jhi-endereco',
    templateUrl: 'endereco.component.html',
})
@Injectable({ providedIn: 'root' })
export class EnderecoComponent {
    @Input('group')
    public enderecoForm: FormGroup;

    initAddress(fb: FormBuilder) {
        return fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress(editForm: FormGroup, fb: FormBuilder ) {
        const control = <FormArray>editForm.controls['addresses'];
        const addrCtrl = this.initAddress(fb);
        control.push(addrCtrl);

        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    }
  

}