import { LitElement, html } from 'lit-element';

import './StepsContainer';
import './ActionItems';

import { workflowItemStyles } from '../../constants/appCssMixins';

/**
 * `<workflow-item>` Custom component to view workflow item row.
 *
 * <body>
 *  <workflow-item
 *  .data=data for the item.
 * >
 * </workflow-item>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
class WorkflowItem extends LitElement {
 
   /**
   * Define the styles of the item row.
   */
  static get styles(){
    return [workflowItemStyles]
  }

  static get properties() {
    return {
      /**
       * The data of the item in a list.
       * 
       * @type {{data: Object}}
       */
      data: { type: Object }
    }
  }

  constructor() {
    super();

    this.data = {}
  }

  render() {
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
