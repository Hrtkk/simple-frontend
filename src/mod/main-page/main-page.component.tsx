import React from "react";
import styled from 'styled-components';
import { IMainPage } from "../../interfaces/dashboard/main-page.interface";
import MainBodySectionComponent from "./main-body-section/main-body-section.component";
import MainFooterSectionComponent from "./main-footer-section/main-footer-section.component";
import MainHeaderSectionComponent from "./main-header-section/main-header-section.component";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
`;


const MainPageComponent: React.FC = (props: IMainPage) => {
    return (
    <Main className="main-page">
        <MainHeaderSectionComponent />
        <MainBodySectionComponent />
        <MainFooterSectionComponent />
    </Main>)
}
export default MainPageComponent;