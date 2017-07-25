export const docsApi = {
  header: ['Name', 'Description', `Type`],
  body: {
    input: [
      {
        name: `config`,
        description: 'Define all properties with interface <b>FormElementInterface</b>.',
        type: `FormElementInterface`
      },
      {
        name: `form`,
        description: `
        @angular/forms <b>FormGroup</b> instance. When null instance will be automatically created inside component.
        `,
        type: `FormGroup`
      },
      {
        name: `model`,
        description: 'Model to manipulate with specified <b>key</b>.',
        type: `Object`
      },
    ],
    output: [
      {
        name: 'cancelled',
        description: 'Event is emitted when `Escape` key is pressed.',
        type: `EventEmitter`
      },
      {
        name: 'changed',
        description: 'Event is emitted when model changed.',
        type: `EventEmitter`
      },
      {
        name: 'created',
        description: `
        Event with value <b>true</b> is emitted after creation <b>__component</b> instance and all properties are assigned.
        <br />
        The same time event <b>destroyed</b> with value <b>false</b> is emitted.
        `,
        type: `EventEmitter`
      },
      {
        name: 'destroyed',
        description: `
        Event with value <b>true</b> is emitted after \`__component\` instance is destroyed and removed FormGroup control.
        <br />
        The same time event <b>created</b> with value <b>false</b> is emitted.
        `,
        type: `EventEmitter`
      },
      {
        name: 'submitted',
        description: 'Event is emitted with FormGroup <b>model</b> after submit form.',
        type: `EventEmitter`
      }
    ],
    properties: [
      {
        name: 'attributes',
        description: 'Html and also some specific angular material <b>attributes</b> used in template.',
        type: `MdInputAttributesInterface`
      },
      {
        name: 'destroy?',
        description: `
        Automatically destroy form element instance on the following events:<br />
          - <strong>onCancelled</strong>,<br />
          - <strong>onChanged</strong>,<br />
          - <strong>onSubmit</strong>
        `,
        type: `DestroyInterface`
      },
      {
        name: 'element',
        description: `
          Form element name based on <b>element</b> type from <b>@ngx-form/type</b> for example 'input', 'select'.
        `,
        type: `element`
      },
      {
        name: 'focus?',
        description: 'Focus form element if value <b>true</b>.',
        type: `boolean`
      },
      {
        name: 'key',
        description: 'Location to data in <b>model</b>.',
        type: 'string'
      },
      {
        name: 'label?',
        description: 'Form element label usually in label tag.',
        type: `string`
      },
      {
        name: 'options?',
        description: ''
      },
      {
        name: 'validators?',
        description: ''
      },
      {
        name: 'viewValue?',
        description: ''
      }
    ]
  }
};
