import { LitElement, html, css } from 'lit-element';

import '../../components/workflowCard/workflowCard';

export class StepsContainer extends LitElement {

  static get styles(){
    return css`
      :host{
        display: flex;
        min-width: 350px;
        overflow: auto;
        padding: 4px 0;
      }
      
      .empty-text{
        font-size: 14px;
        width: 100%;
        margin: 0;
        text-align: center;
        color: #949494;
      }
    `;
  }

  static get properties(){
    return{
      /**
       * An array of chemistry steps.
       */
      steps: {type: Array}
    }
  }

  constructor(){
    super();

    this.steps=[]
  }

  render() {
    return html`
    ${this.steps.length ? this.steps.map(card => {
      return html `
        <workflow-card name="${card.name}" value="${card.value}" status="${card.status}"></workflow-card>
      `
    }) : html`<div class="empty-text">No Chemistry steps added yet. </div>`}
    `;
  }
}

customElements.define('steps-container', StepsContainer);