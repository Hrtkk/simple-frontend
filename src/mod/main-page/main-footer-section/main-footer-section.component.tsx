import { IMainFooter } from "../../../interfaces/dashboard/main-footer.interface";
import  styled from 'styled-components';

const MFooter = styled.div`
  background-color: gray;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MFQuickLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MFRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MFNote = styled.div`

`;

const MainFooterSectionComponent = (props: IMainFooter) => {
  const QUICK_NOTE = "Sponsored@2023";

  return (
    <MFooter>
      <MFQuickLink>
        <MFRow>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </MFRow>
        <MFRow>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </MFRow>
        <MFRow>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </MFRow>
      </MFQuickLink>
      <MFNote>
        { QUICK_NOTE }
      </MFNote>
    </MFooter>
  );
};
export default MainFooterSectionComponent;