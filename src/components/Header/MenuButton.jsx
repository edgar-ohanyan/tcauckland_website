import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import "./header.css";

function MenuButton({ id, label, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={id}
        aria-controls={open ? `${id}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="menu-button"
      >
        {label}
      </Button>
      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": id,
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            className="headerMenuItem"
          >
            <a href={item.path}>{item.title}</a>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MenuButton;
