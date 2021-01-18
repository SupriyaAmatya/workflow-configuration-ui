import { css } from 'lit-element';

export const cardStyles = css`
  .workflow-card{
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 80px;
    height: 45px;
    background-color: #ffffff;
    padding: 8px;
    margin: 0 4px;
    border-radius: 4px;
    border: 1px solid #e9e9e9;
    font-size: 12px;
    color: #8c8c8d;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  .workflow-card:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .card-icon{
    float: right;
    margin-left: 4px;
    width: 18px;
    height: 18px;
  }

  .workflow-card__name{
    margin-right: 4px;
  }

  .workflow-card__value{
    margin-bottom: 2px;
  }

  .workflow-card__name, .workflow-card__value{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .workflow-card.green{
    border-color: #41cc41;
    /* background-color: #f4fff4; */
    background-color:#41cc4106
  }
  .workflow-card.orange{
    border-color: #e4c331;
    /* background-color: #fffff4; */
    background-color: #e4c3310e;
  }
  .workflow-card.red{
    border-color: #e45858;
    background-color: #fff7f7;
  }
`;
