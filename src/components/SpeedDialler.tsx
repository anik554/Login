import { SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CreateIcon from '@mui/icons-material/Create';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const SpeedDialler = () => {
  return (
    
    <>
    <div>
        <Typography>
            dskjdvdsj
        </Typography>
      </div>
    <div>
        <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon  openIcon={<KeyboardDoubleArrowUpIcon />}/>}
      >
        <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle='Copy'  tooltipOpen />
        <SpeedDialAction icon={<CreateIcon />} tooltipTitle='Appointment' tooltipOpen />
      </SpeedDial>
      </div>
      
      </>
    
  );
};

export default SpeedDialler;
