import React from 'react';
import styled from 'styled-components';
import { APP_SUB_TITLE, APP_TITLE } from '../../../../config/const/constant';

const MHH2 = styled.h2`
  padding: 0;
  margin: 0;
`;
const MHTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 0rem;
  margin: 0rem;
`;

const MHSubPara = styled.p`
  padding: 0;
  margin: 0;
`;

const MHSubtitle = styled.div`

`;

const MainHeaderTitleComponent: React.FC = () => {
  return (
    <MHTitle>
      <MHH2>
        { APP_TITLE }
      </MHH2>
      <MHSubtitle>
          <MHSubPara>
            { APP_SUB_TITLE }
          </MHSubPara>
      </MHSubtitle>
    </MHTitle>
  )
};

export default MainHeaderTitleComponent;