import React from "react";
import { Box, Button, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import "./Header.css";
function Header() {
  return (
    <Box display={"flex"} justifyContent={"center"} mt={2}>
      <Stack
        direction={"row"}
        spacing={2}
        alignItems="center"
        justifyContent={"space-around"}
        height={"80px"}
        width={"854px"}
        backgroundColor={"#755893"}
        borderRadius={"20px"}
      >
        <Button
          className="text-[20px]! text-white! font-bold!"
          startIcon={<CreateNewFolderIcon />}
        >
          ADD DESK
        </Button>

        <Button
          className="text-[20px]! text-white! font-bold!"
          startIcon={<ListAltIcon />}
        >
          VIEW ALL
        </Button>
        <Button
          className="text-[20px]! text-white! font-bold!"
          startIcon={<FindInPageIcon />}
        >
          REVIEW
        </Button>
        <Button
          className="text-[20px]! text-white! font-bold!"
          startIcon={<AccountCircleIcon />}
        >
          USER
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
