import React from "react";
import styled from 'styled-components';
import { APP_ICON } from "../../../../config/const/constant";

const HeaderIconDiv = styled.div`
  height: 8rem;
  width: 8rem;
`;

const HeaderIcon = styled.img`
  height: 8rem;
  width: 8rem;
  padding: 2rem;
`;

export const MainHeaderIconComonent: React.FC = () => {
  return (
    <HeaderIconDiv>
      <HeaderIcon src={APP_ICON}></HeaderIcon>
    </HeaderIconDiv>
  );
};

export default MainHeaderIconComonent;