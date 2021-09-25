import { FormControl } from "@angular/forms";

import { AForm } from "./form.class";


export class AFormInput extends AForm {

  public readonly formControl: FormControl = new FormControl();

  protected get isDisable(): boolean {
    return this.formControl.disabled;
  }

  writeValue(val: string): void {
    this.formControl.setValue(val);
  }

  setDisabledState(isDisabled: boolean): void{
    const method: 'enable' | 'disable' = isDisabled ? 'disable' : 'enable';

    this.formControl[method]();
  }

}
