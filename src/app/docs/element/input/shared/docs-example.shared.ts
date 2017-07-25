import { simple } from './input-data.shared';
export const docsExample = {
  simple: {
    html: `
<ngx-form-element
  [form]="form"
  [model]="rows[0]"
  [config]="simple[0]"
  (changed)="onSubmit($event)"
  (created)="created($event)"
  (destroyed)="destroyed($event)"
></ngx-form-element>
    `,
    ts: `${JSON.stringify(simple[0], null, 2)}
    `,
    css: `/** No CSS for this example */`
  },
  extended: {
    html: `
<ngx-form-element
  [form]="form"
  [model]="rows[0]"
  [config]="simple[0]"
  (changed)="onSubmit($event)"
  (created)="created($event)"
  (destroyed)="destroyed($event)"
></ngx-form-element>
    `,
    ts: `${JSON.stringify(simple[0], null, 2)}
    `,
    css: `/** No CSS for this example */`
  },
}
