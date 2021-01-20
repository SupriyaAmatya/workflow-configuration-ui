import { css } from 'lit-element';

export const wellStyles = css `
  :host{
    display: inline-block;
  }
  .well{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .well.default{
    border: 1px dashed #d3d3d3;
  }
  .well.tube{
    background-color: #eeeeee;
  }
  .well.selected{
    background-color: #ff7849;
  }
`;
