import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-image/iron-image';

import { buttonStyles, selectStyles, workflowHeaderStyles } from '../../constants/appCssMixins';

export class Header extends LitElement {

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
        <paper-dropdown-menu label="Select Workflow">
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
        <paper-button class="btn btn-with-icon"><iron-icon icon="add-circle"></iron-icon>ADD WORKFLOW</paper-button>
      </div>
    </div>
    `;
  }
}

customElements.define('workflow-header', Header);
