import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

const ToggleComponent = ({ toggleTheme }) => {
  return (
    <FormControlLabel
      control={<Switch onChange={toggleTheme} />}
      label="Dark Mode"
      sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
    />
  );
};

export default ToggleComponent;
