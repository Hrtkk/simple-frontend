import React from "react";
import styled from 'styled-components';

const HeaderIcon = styled.img`
    height: 8rem;
    width: 8rem;
    padding: 2rem;
`;

export const MainHeaderIconComonent: React.FC = () => {
    return (<>
        <HeaderIcon src="hack.png"></HeaderIcon>
    </>);
};

export default MainHeaderIconComonent;