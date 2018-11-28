import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-cities',
  templateUrl: './select-cities.component.html',
  styleUrls: ['./select-cities.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => SelectCitiesComponent)}
  ]
})
export class SelectCitiesComponent implements ControlValueAccessor{
  cities = [
    'Jerusalem',
    'Tel Aviv',
    'Haifa'
  ]
  private _value: string;
  private _changeCb: any;
  private _blurCb: any;

  get value() {
    return this._value;
  }

  set value(newVal: string) {
    this._value = newVal;
    if (this._changeCb)
      this._changeCb(this._value);
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this._blurCb = fn;
  }

  outOfFocus = () => {
    this._blurCb();
  }

  constructor() { }
}
