import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
function DeskBrief({ deskName, rememmbered, forgeted }) {
  const handleClick = () => {
    console.log("Desk clicked");
  };
  return (
    <Box
      width={"800px"}
      height={"70px"}
      display={"flex"}
      bgcolor={"#E8E8E8"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={"10px"}
      margin={"0 auto"}
      paddingX={"1rem "}
      sx={{
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#E2E1F7",
          cursor: "pointer",
        },
      }}
      onClick={handleClick}
    >
      <Typography variant="p" fontSize={"20px"} fontWeight={"bold"}>
        Desk 1
      </Typography>
      <Box className="flex justify-center items-center">
        <Box>
          <Button disabled endIcon={<CheckBoxIcon />}>
            23
          </Button>
          <Button disabled endIcon={<CancelIcon />}>
            20
          </Button>
        </Box>
        <Button>
          <MoreVertIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default DeskBrief;
