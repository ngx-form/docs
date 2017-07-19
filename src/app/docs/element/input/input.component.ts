// external
import { AfterViewChecked, AfterViewInit, Component, ChangeDetectorRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jsfy from 'jsfy';

// internal
import {
  hintLabelInput,
  maxLength,
  mdPlaceholderInput,
  rows,
  simple
} from './input-data';
import { DocsClass } from './../../docs.class';
import { ArrayFormElementInterface, FormElementInterface } from '@ngx-form/interface';

import * as lodash from 'lodash';

@Component({
  selector: 'app-element-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class ElementInputComponent extends DocsClass implements AfterViewInit, OnChanges, OnInit {

  form: FormGroup;
  hintLabelInput: FormElementInterface;
  maxLength: FormElementInterface;
  mdPlaceholderInput: FormElementInterface;
  placeholderInput: FormElementInterface;
  simple: ArrayFormElementInterface;
  rows: Array<any>;

  example = [
    {
      html: `
<form-element
  [form]="form"
  [model]="rows[0]"
  [config]="simple[0]"
  (changed)="onSubmit($event)"
  (created)="created($event)"
  (destroyed)="destroyed($event)"
></form-element>
      `,
      ts: `${JSON.stringify(simple[0], null, 2)}
      `,
      css: `/** No CSS for this example */`
    }
  ];

  header = ['Name', 'Description'];
  body = {
    output: [
      { name: 'cancelled', description: 'When `Escape` key is pressed' },
      { name: 'changed', description: 'When model change' },
      { name: 'created', description: 'After creation' },
      { name: 'destroyed', description: 'After destroy' },
      { name: 'submitted', description: 'After submit' }
    ],
    input: [
      { name: `config`, description: 'Define all properties' },
      { name: `formGroup`, description: '@Angular/forms group' },
      { name: `key`, description: 'Key to model' },
      { name: `model`, description: 'Model data to manipulate' },
    ],
    properties: [
      { name: 'attributes', description: 'Html attributes in template' },
      {
        name: 'destroy',
        description: `
          Destroy input <strong>onCancelled</strong>, <strong>onCancelled</strong>
        `
      },
      { name: 'element', description: '' },
      { name: 'focus', description: '' },
      { name: 'key', description: '' },
      { name: 'label', description: '' },
      { name: 'options', description: '' },
      { name: 'validators', description: '' },
      { name: 'viewValue', description: '' }
    ]
  };

  cancelled: any;
  changed: any;
  submitted: any;

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

    this.rows = rows;
    this.simple = simple;
    this.form = this.formBuilder.group({});
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

  onSubmit($event) {
    console.log(`(onSubmit)`, $event, this.form);
    console.log(this.form.get('firstname'))
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
