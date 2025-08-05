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
          startIcon={<CreateNewFolderIcon />}
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#755893",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#FFD700",
              color: "black",
            },
            transition: "all 0.2s ease-in-out",
          }}
        >
          ADD DESK
        </Button>

        <Button
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#755893",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#FFD700",
              color: "black",
            },
            transition: "all 0.2s ease-in-out",
          }}
          startIcon={<ListAltIcon />}
        >
          VIEW ALL
        </Button>
        <Button
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#755893",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#FFD700",
              color: "black",
            },
            transition: "all 0.2s ease-in-out",
          }}
          startIcon={<FindInPageIcon />}
        >
          REVIEW
        </Button>
        <Button
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#755893",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#FFD700",
              color: "black",
            },
            transition: "all 0.2s ease-in-out",
          }}
          startIcon={<AccountCircleIcon />}
        >
          USER
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
