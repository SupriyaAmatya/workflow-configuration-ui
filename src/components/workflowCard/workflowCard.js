import { LitElement, html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import { cardStyles } from './workflowCard-styles';

/**
 * `<workflow-card>` Custom component to view the table(grid) of landing page.
 *
 * <body>
 *  <workflow-card
 *  .name=name of the card
 *  .value=value of the card
 *  .color=border color of the card
 *  .bgColor=background color of the card
 * >
 * </workflow-card>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
export class WorkflowCard extends LitElement {

  /**
   * Define the styles of the card.
   */
  static get styles() {
    return [cardStyles];
  }

  static get properties() {
    return {
      /**
       * The name of the card.
       * 
       * @type {{name: String}}
       */
      name: { type: String },

      /**
       * The value of the card.
       * 
       * @type {{value: String}}
       */
      value: { type: String },

      /**
       * The color of the card.
       * 
       * @type {{color: String}}
       */
      color: { type: String },

      /**
       * The background color of the card.
       * 
       * @type {{bgColor: String}}
       */
      bgColor: { type: String },
    };
  }

  constructor() {
    super();

    this.name = 'Step 1';
    this.value = '52';
    this.color = '#e9e9e9';
    this.bgColor = '#ffffff';

  }

  render() {
    const styles = {
      backgroundColor: this.bgColor,
      borderColor: this.color
    }
    return html`
      <div class='workflow-card' style=${styleMap(styles)}>
        <div class="workflow-card__top">
          <span class="workflow-card__name">
            ${this.name}
          </span>
          <iron-icon icon="more-vert" class="card-icon"></iron-icon>
        </div>
        <span class="workflow-card__value">
          ${this.value}
        </span>
      </div>
    `;
  }
}

customElements.define('workflow-card', WorkflowCard);
