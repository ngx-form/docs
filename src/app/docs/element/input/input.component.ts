// external
import { AfterViewChecked, AfterViewInit, Component, ChangeDetectorRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jsfy from 'jsfy';

// internal
import {
  extended,
  hintLabelInput,
  maxLength,
  mdPlaceholderInput,
  rows,
  simple
} from './shared/input-data.shared';
import { docsApi } from './shared/docs-api.shared';
import { docsExample } from './shared/docs-example.shared';
import { DocsClass } from './../../docs.class';
import { ArrayFormElementInterface, FormElementInterface } from '@ngx-form/interface';

import * as lodash from 'lodash';

@Component({
  selector: 'app-element-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class ElementInputComponent extends DocsClass implements AfterViewInit, OnChanges, OnInit {

  docsApi: Object;
  docsExample: Object;
  form: FormGroup;
  formExtended: FormGroup;
  hintLabelInput: FormElementInterface;
  maxLength: FormElementInterface;
  mdPlaceholderInput: FormElementInterface;
  placeholderInput: FormElementInterface;
  simple: ArrayFormElementInterface;
  extended: ArrayFormElementInterface;
  rows: Array<any>;
  cancelled: Function;
  changed: Function;
  submitted: Function;

  /**
   * Creates an instance of ElementComponent.
   * @memberof ElementComponent
   */
  constructor(
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    super();

    // start
    this.maxLength = maxLength;
    this.hintLabelInput = hintLabelInput;
    this.mdPlaceholderInput = mdPlaceholderInput;
    // end

    this.docsApi = docsApi;
    this.docsExample = docsExample;
    this.rows = rows;
    this.simple = simple;
    this.extended = extended;
    this.form = this.formBuilder.group({});
    this.formExtended = this.formBuilder.group({});
  }

  /**
   * @param {any} $event
   * @param {any} property
   * @returns
   * @memberof ElementInputComponent
   */
  created($event, property) {
    console.log(`created`, $event);
    this[property] = $event;
    this.changeDetectorRef.detectChanges();
    return $event;
  }

  /**
   * @param {any} $event
   * @param {any} property
   * @returns
   * @memberof ElementInputComponent
   */
  destroyed($event, property) {
    console.log(`destroyed`, $event);
    this[property] = $event;
    this.changeDetectorRef.detectChanges();
    return $event;
  }

  /**
   * @param {any} $event
   * @memberof ElementInputComponent
   */
  inputCancelled($event) {
    console.log(`On Escape cancelled`);
    this.cancelled = $event;
  }

  /**
   * @param {any} $event
   * @memberof ElementInputComponent
   */
  inputChanged($event) {
    this.changed = $event;
  }

  /**
   * add
   * @memberof ElementInputComponent
   */
  add() {
    // inputs.push(inputs[lodash.random(0, inputs.length - 1)]);
  }

  /**
   * delete last element from `inputs` array
   * @memberof ElementInputComponent
   */
  delete() {
    /*
    if (inputs.length > 0) {
      inputs.pop();
    }
    */
  }

  /**
   * create
   * @param {any} field
   * @memberof ElementInputComponent
   */
  create(field: any) {
    field.element = 'input';
  }

  /**
   * destroy
   * @param {any} field
   * @memberof ElementInputComponent
   */
  destroy(field: any): void {
    field.element = null;
  }

  onSubmit(model) {
    console.log(`onSubmit()`, model, this.formExtended);
    if (this.formExtended.valid) {
      console.log(`form valid`);
    }
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`changes`, changes);
  }

  ngOnInit() {
  }
}
