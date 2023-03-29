import { IMainHeader } from "../../../interfaces/dashboard/main-header.interface";
import styled from 'styled-components';
import MainHeaderIconComonent from "./main-header-components/main-header-icon.component";
import MainHeaderTitleComponent from "./main-header-components/main-header-title.component";
import MainHeaderProfileComponent from "./main-header-components/main-header-profile.component";
import { COLOR_APP_HEADER } from "../../../config/const/colors";
import { useAppDispatch, useAppSelector } from "../../../config/state/hooks";
import { RootState } from "../../../config/state/store";


const MainHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 12rem;
    background-color: ${COLOR_APP_HEADER};
`;


const MainHeaderSectionComponent = (props: IMainHeader) => {
  const dispatch = useAppDispatch();
  const user_name = useAppSelector((state: RootState) => state.userProfile.user_name);

  return (
    <MainHeader>
      <MainHeaderIconComonent />
      <MainHeaderTitleComponent />
      { user_name !== "guest" 
        ? <MainHeaderProfileComponent />
        : <></>
      }
    </MainHeader>
  );
}
export default MainHeaderSectionComponent;