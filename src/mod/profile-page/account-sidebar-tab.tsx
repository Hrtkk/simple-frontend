import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

export const AccountSidebarTabComponent = (props: any) => {
  const { tabValue, setTabValue } = props;
  
  const handleSelectedTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  }
  
  const a11yProps = (index: number) => {
    return {
      id: `accounts-tab-${index}`,
      'aria-controls': `accounts-tabpanel-${index}`,
    };
  };
  return <>
    <Box sx={{ bgColor: 'background.paper', height: '10rem', width: '8rem' }}>
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={tabValue}
        onChange={handleSelectedTabChange}
        aria-label="Accounts tab">
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Orders" {...a11yProps(1)} />
        <Tab label="Payments" {...a11yProps(2)} />
      </Tabs>
    </Box>
  </>;
};
