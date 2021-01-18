import { LitElement, html } from 'lit-element';

import './WorkflowItem';
import { data } from '../../constants/data';
import { workflowListStyles } from '../../constants/appCssMixins';

export class WorkflowList extends LitElement {

  static get styles() {
    return [workflowListStyles]
  }

  constructor() {
    super();

    this.data = data;
  }

  render() {
    // console.log(this.data);
    return html`
      <div class="list-container">
        ${this.data.map(row => {
          return html`
            <workflow-item .data=${row}></workflow-item>
          `
        })}
      </div>
    `;
  }
}

customElements.define('workflow-list', WorkflowList);