import { LitElement, html} from 'lit-element';

import '../../components/well/appWell';

import { wellData } from '../../constants/data';
import {wellPlateStyles} from '../../constants/appCssMixins';
import { ROW_HEADERS, COL_HEADERS }  from '../../constants/appConstans';
import { createArray } from '../../utils/createArray';

/**
 * `<well-plate>` Custom component for collections of wells.
 *
 * <body>
 *  <well-plate>
 * </well-plate>
 *
 * @LitElement
 * @Polymer
 * @customElement
 */
class WellPlate extends LitElement {

  /**
   * Define styles for plate.
   */
  static styles = [wellPlateStyles];

  render() {
    // let grid = [];
    // let iMax = 8;
    // let jMax = 12;
    // for (let i = 0; i < iMax; i++) {
    //   grid[i] = [];
    //   for (let j = 0; j < jMax; j++) {
    //     grid[i][j] = {};
    //   }
    // }

    // const newArr = [].concat(...grid);

    const newArr = createArray(96);
    const combinedData = newArr.map((obj,index) => wellData.find(i => i.position === index + 1) || obj);

    // each columns header (i.e. from 1-12) 
    const colHeader = html`
      ${COL_HEADERS.map(col => {
      return html`<span class="cell">${col}</span>`
    })}
    `

    // each row header (i.e. from A-H) 
    const rowHeader = html`
      ${ROW_HEADERS.map(col => {
      return html`<div class="cell">${col}</div>`
    })}
    `

    return html`
      <div class="plate-container">
        <div class="title">
          <h3>Plate</h3>
        </div>
        
        <div class="well-wrapper">
          <div class="col-header">${colHeader}</div>
          <div class="flex">
            <div class="row-header">${rowHeader}</div>
            <div class="well-container">
              ${combinedData.map(well => {
                return html`
                  ${Object.keys(well).length 
                    ? html`<app-well .border=${well.border} ?hasTube=${well.position}></app-well>`
                    : html `<app-well></app-well>`}
                `
              })}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('well-plate', WellPlate);
