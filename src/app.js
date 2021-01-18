import { LitElement, html, css } from 'lit-element';

import './components/workflowCard/workflowCard';
import './views/workflow/WorkflowList';
import './views/header/Header';

export class AppElement extends LitElement {
  static get styles() {
    return css`
      .main-wrapper{
        padding: 25px;
      }

      .container{
        background-color: #ffffff;
        border-radius: 2px;
      }
    `;
  }

  render() {
    return html`
      <div class="main-wrapper">
        <div class="container">
          <workflow-header></workflow-header>
          <workflow-list></workflow-list>
        </div>
      </div>
    `;
  }
}

window.customElements.define('app-element', AppElement);
