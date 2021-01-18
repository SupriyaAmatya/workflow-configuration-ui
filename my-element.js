// /**
//  * @license
//  * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
//  * This code may only be used under the BSD style license found at
//  * http://polymer.github.io/LICENSE.txt
//  * The complete set of authors may be found at
//  * http://polymer.github.io/AUTHORS.txt
//  * The complete set of contributors may be found at
//  * http://polymer.github.io/CONTRIBUTORS.txt
//  * Code distributed by Google as part of the polymer project is also
//  * subject to an additional IP rights grant found at
//  * http://polymer.github.io/PATENTS.txt
//  */

// import {LitElement, html, css} from 'lit-element';

// /**
//  * An example element.
//  *
//  * @slot - This element has a slot
//  * @csspart button - The button
//  */
// export class MyElement extends LitElement {
//   static get styles() {
//     return css`
//       :host {
//         display: block;
//         border: solid 1px gray;
//         padding: 16px;
//         max-width: 800px;
//       }
//     `;
//   }

//   static get properties() {
//     return {
//       /**
//        * The name to say "Hello" to.
//        */
//       name: {type: String},

//       /**
//        * The number of times the button has been clicked.
//        */
//       count: {type: Number},
//     };
//   }

//   constructor() {
//     super();
//     this.name = 'World';
//     this.count = 0;
//   }

//   render() {
//     return html`
//       <h1>Hello, ${this.name}!</h1>
//       <button @click=${this._onClick} part="button">
//         Click Count: ${this.count}
//       </button>
//       <slot></slot>
//     `;
//   }

//   _onClick() {
//     this.count++;
//   }
// }

// window.customElements.define('my-element', MyElement);

import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() { return {
    prop1: { type: String, reflect: true },
    prop2: { type: Number, reflect: true },
    prop3: { type: Boolean, reflect: true },
    prop4: { type: Array, reflect: true },
    prop5: { type: Object, reflect: true }
  };}

  constructor() {
    super();
    this.prop1 = '';
    this.prop2 = 0;
    this.prop3 = false;
    this.prop4 = [];
    this.prop5 = { };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    console.log('attribute change: ', name, newVal);
  }

  render() {
    console.log("PROP 5 => ", this.prop5);
    return html`
      <p>prop1 ${this.prop1}</p>
      <p>prop2 ${this.prop2}</p>
      <p>prop3 ${this.prop3}</p>

      <p>prop4: ${this.prop4.map((item, index) =>
        html`<span>[${index}]:${item}&nbsp;</span>`)}
      </p>

      <p>prop5:
        ${Object.keys(this.prop5).map(item =>
          html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>

      <img src="./src/assets/images/logo.png" />
      <button @click="${this.changeProperties}">change properties</button>
      <button @click="${this.changeAttributes}">change attributes</button>
    `;
  }

  changeAttributes() {
    let randy = Math.floor(Math.random()*10);
    let myBool = this.getAttribute('prop3');

    this.setAttribute('prop1', randy.toString());
    this.setAttribute('prop2', randy.toString());
    this.setAttribute('prop3', myBool? '' : null);
    this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
    this.setAttribute('prop5',
      JSON.stringify(Object.assign({}, this.prop5, {[randy]: randy})));
    this.requestUpdate();
  }

  changeProperties() {
    let randy = Math.floor(Math.random()*10);
    let myBool = this.prop3;

    this.prop1 = randy.toString();
    this.prop2 = randy;
    this.prop3 = !myBool;
    this.prop4 = [...this.prop4, randy];
    this.prop5 = Object.assign({}, this.prop5, {[randy]: randy});
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
  }

}

customElements.define('my-element', MyElement);