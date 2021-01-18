import { LitElement, html, css } from 'lit-element';

import '../../components/workflowCard/workflowCard';

/**
 * `<steps-container>` Custom component to view the list of steps.
 *
 * <body>
 *  <steps-container
 *  .steps=array of steps in a workflow.
 * >
 * </steps-container>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
class StepsContainer extends LitElement {

   /**
   * Define styles of the step card container.
   */
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
       * 
       * @type {{steps: Array}}
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
      const bgColor = card.color && card.color + '05';

      return html `
        <workflow-card name="${card.name}" value="${card.value}" bgColor="${bgColor}" color="${card.color}"></workflow-card>
      `
    }) 
    : html`<div class="empty-text">No Chemistry steps added yet. </div>`}
    `;
  }
}

customElements.define('steps-container', StepsContainer);