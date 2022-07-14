import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #445daf;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: tomato;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:not(:first-child) {
    border-left: 1px solid #fff;
    padding-left: 15px;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserText = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const UserSubText = styled.span`
  color: tomato;
`;

export const LogoutBtn = styled.button`
  margin-left: 10px;
  border-radius: 6px;
  border: 1px #230ca3 solid;
  padding: 8px;

  background-image: linear-gradient(#5861df, #424bcf);

  color: #fff;
  font-size: 14px;
  font-weight: 700;
  opacity: 1;

  &:hover {
    background-image: linear-gradient(#2e0cee, #351ff8);
    text-decoration: none;
  }

  &:active {
    background-image: linear-gradient(#230ca3, #1a0ba5);
    outline: none;
  }
`;
