import { css } from 'lit-element';

export const workflowHeaderStyles = css`
  .header-title{
    font-size: 16px;
    font-weight: 600;
  }
  .header-title iron-icon{
    color: #80868b;
    cursor: pointer;
  }
  .header-filter{
    margin: 24px 0;
    width: 100%;
    display: inline-flex;
    align-items: center;
  }
  .header-filter__right{
    margin-left: auto;
  }

  .logo-wrapper{
    display: inline-block;
    position: relative;
    top: 10px;
    margin-right: 8px;
  }

  paper-dropdown-menu{
    margin-right: 8px;
  }

  paper-button, paper-checkbox{
    position: relative;
    top: 10px
  }

  .filter-icon{
    color: #80868b;
  }
`;

export const selectStyles = css`
  mwc-select{
    width: 225px;
  }
  
  mwc-select .select{
    background-color: pink;
  }
`
export const buttonStyles = css`
  .btn{
    font-size: 14px;
    color: #304ffe;
    font-weight: bold;
  }
  iron-icon{
    --iron-icon-height: 18px;
    --iron-icon-width: 18px;
    margin-right: 6px;
  }
`;

export const workflowListStyles = css`
  .list-container{
    width:100%;
    border-top: 2px solid #d3d2d2;
    font-size: 14px;
  }
`;

export const workflowItemStyles = css`
  .list-item{
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #eef0f0;
    display: flex;
    align-items: center;
  }
  .col{
    padding: 0 20px
  }
  .col1{
    font-weight: bold;
    width: 15%;
    flex-basis: 15%;
  }
  .col2{
    width: 70%;
    flex-basis: 70%;
  }
  .col3{
    width: 15%;
    flex-basis: 15%;
  }

  @media screen and (max-width: 890px){
    .col1, .col3{
      width: 25%;
      flex-basis: 25%;
    }
    .col2{
      width: 50%;
      flex-basis: 50%;
    }
  }
`;

export const wellPlateStyles = css`
  :host {
    display: block;
    padding: 24px;
  }
  .plate-container{
    width: 50%;
    min-height: 430px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
  }
  .title{
    border-bottom: 1px solid #dbdbdb;
    padding: 0 20px;
  }
  .well-wrapper{
    padding: 20px;    
    overflow-x: auto;
    position: relative;
  }
  .well-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2px;
  }
  .cell{
    min-width: 40px;
    height: 40px;
    display: flex;
    font-weight: 600;
  }
  .col-header{
    margin-left: 50px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .col-header .cell{
    margin:0 3px;
    text-align: center
  }
  .row-header{
    display: flex;
    flex-direction: column;
  }
  .row-header .cell{
    align-items: center;
    margin-bottom:8px;
  }
  .flex{
    display: flex;
  }
  app-well{
    margin: 0 2px;
  }
  
  @media screen and (max-width: 768px){
    .plate-container{
      width:100%
    }
  }
`;
