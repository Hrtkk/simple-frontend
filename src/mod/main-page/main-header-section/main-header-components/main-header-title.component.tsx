import React from 'react';
import styled from 'styled-components';

const TITLE = "Hack-To-Sack";
const SUB_TITLE = "Let's Hack to sack down the complexity.";

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
        { TITLE }
      </MHH2>
      <MHSubtitle>
          <MHSubPara>
            { SUB_TITLE }
          </MHSubPara>
      </MHSubtitle>
    </MHTitle>
  )
};

export default MainHeaderTitleComponent;