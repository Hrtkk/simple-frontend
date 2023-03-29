import { Box, Button, Card, TextField } from "@mui/material";
import styled from 'styled-components';
import { LoginComponent } from "../../login-page/login.component";

const MBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MBodyExtra = styled.div`

`;

const MainBodySectionComponent: React.FC = () => {
  return (<MBody>
    <MBodyExtra>
      Some Textual information
    </MBodyExtra>
    <LoginComponent />
  </MBody>)
}
export default MainBodySectionComponent;