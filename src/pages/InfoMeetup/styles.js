import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    max-width: 940px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        height: 42px;
        width: 116px;
        background: #4dbaf9;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
          background: ${darken(0.03, '#409fe7')};
        }
        span {
          padding-left: 5px;
        }
      }
    }
    strong {
      color: #fff;
      font-size: 32px;
      margin: 0;
    }
  }
`;

export const Card = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  img {
    max-height: 300px;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    color: #ffff;
    line-height: 2;
    text-align: justify;
  }
`;

export const Information = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      align-self: start;
      margin-left: 10px;
      font-size: 18px;
      color: #ffff;
      line-height: 2;
      text-align: justify;
    }
  }
`;
