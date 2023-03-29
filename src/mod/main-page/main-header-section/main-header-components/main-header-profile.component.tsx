import React from "react";
import { useRef } from "react";
import styled from 'styled-components';
import { Menu, Button, MenuItem, Avatar } from "@mui/material";

const MHProfile = styled.div`
    display: flex;
    justify-content: center;
    justify-self: right;
    padding-right: 4rem;
`;


const MainHeaderProfileComponent: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const avatarElement = React.useRef(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (avatarElement.current)
      setAnchorEl(avatarElement.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const condition = true;

  return (
    <>
      { condition 
        ? ( <MHProfile>
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar ref={avatarElement} sx={{width: '4.5rem', height: '4.5rem'}}></Avatar>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
          'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </MHProfile> )
      : <></> }
    </>
  );
};

export default MainHeaderProfileComponent;