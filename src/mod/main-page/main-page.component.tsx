import React from "react";
import styled from 'styled-components';
import { IMainPage } from "../../interfaces/dashboard/main-page.interface";
import MainFooterSectionComponent from "./main-footer-section/main-footer-section.component";
import MainHeaderSectionComponent from "./main-header-section/main-header-section.component";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
`;

const MainBody = styled.div`

`;

const MainPageComponent: React.FC = (props: IMainPage) => {
    return (
    <Main className="main-page">
        <MainHeaderSectionComponent />
        <MainBody className="main-body" >
            <p>This is body</p>
        </MainBody>
        <MainFooterSectionComponent />
    </Main>)
}
export default MainPageComponent;