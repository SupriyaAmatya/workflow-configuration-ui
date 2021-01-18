import { LitElement, html, css } from 'lit-element';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

export class ActionItems extends LitElement {

  static styles = css`
    :host {
      display: block;
      color: #80868b;
      text-align: right;
    }
    .small {
      --iron-icon-height: 16px;
      --iron-icon-width: 16px;
    }
    iron-icon{
      margin: 0 2px;
      cursor: pointer;
    }
    iron-icon:hover{
      color: #586066;
    }
  `;

  render() {
    return html`
    <iron-icon class="small" icon="add-circle" title="Add steps"></iron-icon>
    <iron-icon class="small" icon="content-copy" title="Copy steps"></iron-icon>
    <iron-icon class="small" icon="create" title="Edit steps"></iron-icon>
    <iron-icon class="small" icon="delete" title="Remove"></iron-icon>
    `;
  }
}

customElements.define('action-items', ActionItems);