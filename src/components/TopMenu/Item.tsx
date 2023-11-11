"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ItemI } from "@/components/TopMenu/typing";

export const Item: React.FC<ItemI> = ({ title, list }) => {
  const [anchorEl, setAnchorEl] = React.useState<
    null | HTMLElement | undefined
  >(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack direction="row">
      <Button
        variant="text"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ zIndex: 2000 }}
      >
        {list &&
          list.length > 0 &&
          list.map((item) => {
            return (
              <MenuItem
                key={item.name}
                onClick={item.action ? item.action : handleClose}
              >
                {item.name}
              </MenuItem>
            );
          })}
      </Menu>
    </Stack>
  );
};
