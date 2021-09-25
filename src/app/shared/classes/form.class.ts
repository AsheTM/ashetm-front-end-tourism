import { ControlValueAccessor } from "@angular/forms";


export abstract class AForm implements ControlValueAccessor {

  protected onChange:   (val: any)  => void;
  protected onTouched:  ()          => void;

  abstract writeValue(val: string): void;

  setDisabledState?(isDisabled: boolean): void;

  registerOnChange(fn: (val: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
