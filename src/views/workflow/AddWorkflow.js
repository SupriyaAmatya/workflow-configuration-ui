import { LitElement, html, css } from 'lit-element';

import '@polymer/paper-dialog/paper-dialog';

class AddWorkflowModal extends LitElement {

  static styles = css`
  :host {
    display: block;
  }  
  paper-dialog.custom-modal{
    border-radius: 4px;
    width: 500px;
  }
  .form-group{
    width: 100%;
  }
  .form-group label{
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--paper-grey-500);
  }
  .form-group input{
    box-sizing: border-box;
    outline: 0;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--paper-grey-500);
    padding: 0 10px;
    height: 40px;
  }
  `;

  render() {
    return html`
    <paper-dialog id="modal" opened modal class="custom-modal">
      <h2 class="modal__header">Add workflow</h2>
      <div>
        <div class="form-group">
          <label for="name">Workflow name</label>
          <input id="name" placeholder="Workflow name" />
        </div>
      </div>
      <div class="buttons">
        <paper-button dialog-dismiss>Cancel</paper-button>
        <paper-button dialog-confirm autofocus>Add</paper-button>
      </div>
    </paper-dialog>
    `;
  }
}

customElements.define('add-workflow-modal', AddWorkflowModal);