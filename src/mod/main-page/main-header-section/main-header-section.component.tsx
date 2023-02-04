import { IMainHeader } from "../../../interfaces/dashboard/main-header.interface";
import styled from 'styled-components';
import MainHeaderIconComonent from "./main-header-components/main-header-icon.component";
import MainHeaderTitleComponent from "./main-header-components/main-header-title.component";
import MainHeaderProfileComponent from "./main-header-components/main-header-profile.component";


const MainHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background-color: gray;
`;


const MainHeaderSectionComponent = (props: IMainHeader) => {
    return (
        <MainHeader>
            <MainHeaderIconComonent />
            <MainHeaderTitleComponent />
            <MainHeaderProfileComponent />
        </MainHeader>
    );
}
export default MainHeaderSectionComponent;