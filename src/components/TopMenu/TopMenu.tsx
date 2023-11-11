"use client";
import React from "react";
import Stack from "@mui/material/Stack";

import { Item } from "@/components/TopMenu/Item";
import { TopMenuI } from "@/components/TopMenu/typing";

export const TopMenu: React.FC<TopMenuI> = ({ menu }) => {
  return (
    <Stack spacing={2} direction="row">
      {menu &&
        menu.length > 0 &&
        menu.map((item) => {
          return (
            <Item
              key={item.title}
              title={item.title}
              list={item.list ? item.list : []}
            />
          );
        })}
    </Stack>
  );
};
