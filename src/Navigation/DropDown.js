import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom'


export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const GoToCse=()=>{
    this.props.history.push(`{props.props}`)
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {props.value}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
        <NavLink to ="/Cse2k19">
        Cse
        </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>EE</MenuItem>
        <MenuItem onClick={handleClose}>Mac</MenuItem>
        <MenuItem onClick={handleClose}>Civil</MenuItem>
        <MenuItem onClick={handleClose}>MEMs</MenuItem>
      </Menu>
    </div>
  );
}