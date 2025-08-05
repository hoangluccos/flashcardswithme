import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header/Header";
import DeskBrief from "../components/DeskBrief/DeskBrief";

function HomePage() {
  {
    /* remember to pagination */
  }
  return (
    <Stack className="items-center w-full h-dvh bg-[#FDE8FE] gap-2">
      <Header />
      <Box className="bg-[#C3B4D3] h-[560px] w-[854px] rounded-[20px] flex flex-col justify-start gap-3 py-5">
        <DeskBrief />
        <DeskBrief />
        <DeskBrief />
        <DeskBrief />
        <DeskBrief />
        <DeskBrief />
      </Box>
    </Stack>
  );
}

export default HomePage;
