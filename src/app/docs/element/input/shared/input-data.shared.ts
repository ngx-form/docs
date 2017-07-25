
import { ArrayFormElementInterface, FormElementInterface } from '@ngx-form/interface';

export const simple: ArrayFormElementInterface = [
  {
    attributes: {
      autocomplete: 'off',

      // Material Design
      color: 'accent',
      floatPlaceholder: 'never',
      hideRequiredMarker: true,
      // end

      disabled: false,
      placeholder: 'Firstname',
      required: false,
      type: 'text'
    },
    destroy: {
      onCancelled: false,
      onChanged: false,
      onSubmitted: false
    },
    element: 'input',
    focus: true,
    key: 'firstname'
  }
];

export const extended: ArrayFormElementInterface = [
  {
    attributes: {
      // Material Design
      color: 'primary',
      floatPlaceholder: 'auto',
      hideRequiredMarker: true,
      // end

      disabled: false,
      placeholder: 'Input type: date',
      required: false,
      type: 'date'
    },
    destroy: {
      onCancelled: false,
      onChanged: false,
      onSubmitted: false
    },
    element: 'input',
    focus: false,
    key: 'birthday'
  },
  {
    attributes: {
      // Material Design
      color: 'primary',
      floatPlaceholder: 'auto',
      hideRequiredMarker: true,
      // end

      disabled: false,
      placeholder: 'Input type: datetime-local',
      required: false,
      type: 'datetime-local'
    },
    destroy: {
      onCancelled: false,
      onChanged: false,
      onSubmitted: false
    },
    element: 'input',
    focus: false,
    key: 'createdAt'
  },
  {
    attributes: {
      autocomplete: 'off',

      // Material Design
      color: 'primary',
      floatPlaceholder: 'auto',
      hideRequiredMarker: true,
      // end

      maxlength: 20,
      minlength: 10,

      disabled: false,
      placeholder: 'Input type: email',
      required: false,
      type: 'email'
    },
    destroy: {
      onCancelled: false,
      onChanged: false,
      onSubmitted: false
    },
    mdHint: {
      end: 'maxlength'
    },
    element: 'input',
    focus: false,
    key: 'email'
  },
  {
    attributes: {
      // Material Design
      color: 'primary',
      floatPlaceholder: 'auto',
      hideRequiredMarker: true,
      // end

      disabled: false,
      placeholder: 'Input type: month',
      required: false,
      type: 'month'
    },
    destroy: {
      onCancelled: false,
      onChanged: false,
      onSubmitted: false
    },
    element: 'input',
    focus: false,
    key: 'month'
  },
  {
    attributes: {
      // Material Design
      color: 'primary',
      floatPlaceholder: 'auto',
      hideRequiredMarker: true,
      // end

      max: 25,
      min: 15,
      step: 2,

      disabled: false,
      placeholder: 'Input type: number',
      required: false,
      type: 'number'
    },
    destroy: {
      onCancelled: false,
      onChanged: false,
      onSubmitted: false
    },
    element: 'input',
    focus: false,
    key: 'age'
  }
];

/*
number
password
search
tel
text
time
url
week

*/

export const rows: Array<any> = [
  {
    _id: 1,
    firstname: '',
    lastname: 'Rudnicki',
    age: 27,
    address: {
      street: 'Głuszyna',
      home: '270/5'
    },
    email: 'scibor.rudnicki@wwwdev.io',
    birthday: '2017-04-14',
    createdAt: '2019-01-01T15:01',
    month: '2017-04',
    range: '',
    time: '01:04',
    week: '2017-W13'
  },
  {
    _id: 2,
    firstname: 'Stanisław',
    lastname: 'Czorny',
    age: 15,
    birthday: '2017-04-14',
    createdAt: '2019-01-01T15:01',
    month: '2017-04',
    range: '',
    time: '01:04',
    week: '2017-W13'
  },
  {
    _id: 3,
    firstname: 'Kazimierz',
    lastname: 'Wielki',
    age: 3,
    birthday: '2017-04-14',
    createdAt: '2019-01-01T15:01',
    month: '2017-04',
    range: '',
    time: '01:04',
    week: '2017-W13'
  }
];

/*
  Change specific property of input
*/
export const hintLabelInput: FormElementInterface = {
  attributes: {
    autocomplete: 'off',

    // Material Design
    color: 'accent',
    floatPlaceholder: 'float',
    hintLabel: 'Change hintLabel',
    hideRequiredMarker: true,
    // end

    disabled: false,
    placeholder: 'Hint label',
    type: 'text'
  },
  element: 'input',
  focus: false,
  key: 'hintLabel',
  mdHint: {
    start: 'start mdHint'
  },
  mdPlaceholder: 'hintLabel'
};
export const mdPlaceholderInput: FormElementInterface = {
  attributes: {
    autocomplete: 'off',

    // Material Design
    color: 'accent',
    hintLabel: 'Change mdPlaceholder',
    hideRequiredMarker: true,
    // end

    disabled: false,
    type: 'text'
  },
  element: 'input',
  focus: false,
  key: 'mdPlaceholder',
  mdPlaceholder: 'Change mdPlaceholder'
};
export const maxLength: FormElementInterface = {
  attributes: {
    autocomplete: 'off',

    // Material Design
    color: 'accent',
    hintLabel: 'Change maxLength',
    hideRequiredMarker: true,
    // end

    disabled: false,
    type: 'number'
  },
  element: 'input',
  focus: false,
  key: 'maxlength',
  mdPlaceholder: 'Change maxLength'
};
