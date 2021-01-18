import { LitElement, html } from 'lit-element';

import './StepsContainer';
import './ActionItems';

import { workflowItemStyles } from '../../constants/appCssMixins';

export class WorkflowItem extends LitElement {

  static get styles(){
    return [workflowItemStyles]
  }

  static get properties() {
    return {
      data: { type: Object }
    }
  }

  constructor() {
    super();

    this.data = {}
  }

  render() {
    console.log('row =>', this.data);
    return html`
      <div class="list-item">
        <div class="col col1">${this.data.workflow}</div>
        <div class="col col2">
          <steps-container .steps=${this.data.steps}></steps-container>
        </div>
        <div class="col col3">
          <action-items></action-items>
        </div>
      </div>
    `;
  }
}

customElements.define('workflow-item', WorkflowItem);
