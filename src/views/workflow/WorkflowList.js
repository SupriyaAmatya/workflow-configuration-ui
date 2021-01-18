import { LitElement, html } from 'lit-element';
import { nothing } from 'lit-html';

import './WorkflowItem';

import { data } from '../../constants/data';
import { workflowListStyles } from '../../constants/appCssMixins';

/**
 * `<workflow-list>` Custom component to view the list of workflow.
 *
 * <body>
 *  <workflow-list>
 * </workflow-list>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
class WorkflowList extends LitElement {

  /**
   * Define the style for list.
   */
  static get styles() {
    return [workflowListStyles]
  }

  constructor() {
    super();

    this.data = data;
  }

  render() {
    return html`
      <div class="list-container">
        ${this.data.length ? this.data.map(row => {
          return html`
            <workflow-item .data=${row}></workflow-item>
          `
        })
        : nothing}
      </div>
    `;
  }
}

customElements.define('workflow-list', WorkflowList);