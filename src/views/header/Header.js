import { LitElement, html, css } from 'lit-element';

import '@polymer/paper-item/paper-item';
import '@polymer/iron-image/iron-image';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import '../workflow/AddWorkflow';

import { buttonStyles, selectStyles, workflowHeaderStyles } from '../../constants/appCssMixins';

/**
 * `<workflow-header>` Custom component to view the header of Workflow configuration.
 *
 * <body>
 *  <workflow-header>
 * </workflow-header>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
class Header extends LitElement {

  /**
   * Define the styles for header.
   */
  static get styles() {
    return [
      buttonStyles,
      selectStyles,
      workflowHeaderStyles,
      css`
      :host {
        display: block;
        padding: 16px;
      }
    `]
  }

  static get properties(){
    return{
      selectedItem: { type: String}
    }
  }

  constructor(){
    super();

    this.selectedItem = ''
  }

  _toggleDialog = () => {
    const addWorkflow = this.shadowRoot.querySelector('add-workflow-modal');
    const modal = addWorkflow.shadowRoot.querySelector('#modal')
    modal.open();
  }

  _itemSelected (e) {
    var selectedItem = e.target.selectedItem;
    if (selectedItem) {
      this.selectedItem = selectedItem.innerText;
    }
  }

  render() {

    return html`
    <div class="header-title">
      <iron-icon icon="arrow-back"></iron-icon>
      <span>Workflow Configuration</span>
    </div>
    <div class="header-filter">
      <span class="logo-wrapper">
        <img src="../../../src/assets/images/logo.png" alt="logo" />
      </span>
      <div class="header-filter__left">
        <paper-dropdown-menu label="Select Workflow" @selected-item-changed=${this._itemSelected}>
          <paper-listbox slot="dropdown-content" class="dropdown-content" selected="0">
            <paper-item>Standard Workflow</paper-item>
            <paper-item>Basic Workflow</paper-item>
            <paper-item>Advanced Workflow</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
        <paper-checkbox checked>SET AS DEFAULT</paper-checkbox>
        <paper-button class="btn--edit"><iron-icon icon="create" class="filter-icon"></iron-icon>Edit</paper-button>
      </div>
      <div class="header-filter__right">
        <paper-button class="btn btn-with-icon" @click=${this._toggleDialog}><iron-icon icon="add-circle"></iron-icon>ADD WORKFLOW</paper-button>
      </div>
    </div>
    
    ${
        this.selectedItem ? html`<p>The selected item is: <strong>${this.selectedItem}</strong></p>` : ''
      }
    <add-workflow-modal ></add-workflow-modal>
    `;
  }
}

customElements.define('workflow-header', Header);
