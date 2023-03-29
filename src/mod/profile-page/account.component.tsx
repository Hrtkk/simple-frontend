import { Box } from "@mui/material";
import { useState } from "react";
import { AccountSidebarTabComponent } from "./account-sidebar-tab";
import { TabPanel } from "./tab-panel.component";
import styled from 'styled-components';


const AccountsDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
`;

export const AccountComponent = (props: any) => {
  const [tabValue, setTabValue] = useState(0);
  


  return <AccountsDiv>
    <AccountSidebarTabComponent tabValue={tabValue} setTabValue={setTabValue} />
    <Box>
      <TabPanel value={tabValue} index={0}>
        This is profile tab panel
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        This is orders tab panel
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        This is payments tab panel
      </TabPanel>
    </Box>
  </AccountsDiv>
};
