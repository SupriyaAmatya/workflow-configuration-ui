import { nothing } from 'lit-html';
import { LitElement, html } from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

import { wellStyles } from './well-styles';

/**
 * `<app-well>` Custom component for well(test tubes).
 *
 * <body>
 *  <app-well
 *  .border=list of border colors for well
 *  .hasTube=status of the well(true or false)
 * >
 * </app-well>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
class AppWell extends LitElement {

  /**
   * Define styles of the Well component.
   */
  static styles = [wellStyles]

  static get properties(){
    return {
      /**
       * The list of the border colors.
       * 
       * @type {{border: Array}}
       */
      border: {type: Array},

      /**
       * check if the well has tube or not.
       * 
       * @type {{hasTube: Boolean}}
       */
      hasTube: {type: Boolean},

      /**
       * if selected, color of well is set ro orange.
       * 
       * @type {{selected: Boolean}}
       */
      selected: {type: Boolean, attribute: false}
    }
  }

  constructor(){
    super();

    this.border=[];
    this.hasTube = false;
    this.selected = false;

  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  firstUpdated(){
    if(this.border.length){
      let myBool = this.selected;

      this.selected = !myBool;
    }
  }

  render() {
    const borderStyles = {
      boxShadow: this.border.length ? this.border.map((color, index) => {
        return 'inset 0 0 0 ' + `${(index + 1)*4}px ` + color
      }): nothing
    }

    const classNames = {
      'well': true,
      'default': !this.hasTube,
      'tube': this.hasTube, // gray color
      'selected': this.selected // orange color
    }

    return html`
      <div class=${classMap(classNames)} style=${styleMap(borderStyles)} @click=${this.toggleSelect}></div>
    `;
  }

  toggleSelect(){
    if(this.hasTube && !this.border.length){
      let myBool = this.selected;

      this.selected = !myBool;
    } 
    if(this.border.length){
      let myBool = this.selected;

      this.selected = !myBool;
    }
  }

  // updated(toggleSelect) {
  //   toggleSelect.forEach((oldValue, propName) => {
  //     console.log(`${propName} changed. oldValue: ${oldValue}`);
  //   });
  // }
}

customElements.define('app-well', AppWell);