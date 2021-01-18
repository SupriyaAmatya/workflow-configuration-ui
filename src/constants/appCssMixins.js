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
