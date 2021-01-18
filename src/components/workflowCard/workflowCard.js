import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import { LitElement, html } from 'lit-element';
import {classMap} from 'lit-html/directives/class-map.js';

import { statusColors } from '../../constants/appConstans';
import { cardStyles } from './workflowCard-styles';

export class WorkflowCard extends LitElement {

  static get styles() {
    return [cardStyles];
  }

  static get properties() {
    return {
      /**
       * The name of the card.
       */
      name: { type: String },

      /**
       * The value of the card.
       */
      value: { type: String },

      /**
       * The status of the card.
       */
      status: { type: String },
    };
  }

  constructor() {
    super();

    this.name = 'Step 1';
    this.value = '52';
    this.status = 'not started'

  }

  render() {
    const mainClassName = 'workflow-card';
    const statusClassName = statusColors[this.status];
    const cardClass = {
      [mainClassName]: true,
      [statusClassName]: true,
    }
    return html`
      <div class=${classMap(cardClass)}>
        <iron-icon icon="more-vert" class="card-icon"></iron-icon>
        <span class="workflow-card__name">
          ${this.name}
        </span>
        <span class="workflow-card__value">
          ${this.value}
        </span>
      </div>
    `;
  }
}

customElements.define('workflow-card', WorkflowCard);
