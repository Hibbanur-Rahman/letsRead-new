import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Brief from './Brief';
import Objectives from './Objectives';
import Benefit from './Benefit';
import Content from './Content';
import Gallery from './Galler';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PhoenicTab() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          className='bg-darkPurple' 
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="BriefDescription" {...a11yProps(0)} />
          <Tab label="Objectives" {...a11yProps(1)} />
          <Tab label="Benefits" {...a11yProps(2)} />
          <Tab label="Content" {...a11yProps(3)} />
          <Tab label="Gallery" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div
         className='py-2 px-8'
         index={value}
         onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Brief />
        </TabPanel>
        <TabPanel value={value} index={1}>
         <Objectives />
        </TabPanel> 
        <TabPanel value={value} index={2}>
          <Benefit />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Content />
        </TabPanel> 
        <TabPanel value={value} index={4} >
          <Gallery />
        </TabPanel>
      </div>
    </Box>
  );
}
