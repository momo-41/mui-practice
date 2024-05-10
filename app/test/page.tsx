import { Box, Typography } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <Box>
      <Typography
        fontSize={{ xs: 20, sm: 30, md: 40, lg: 50 }}
        color={"white"}
        bgcolor={"lightgreen"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={3}
        p={10}
      >
        Hello World!
      </Typography>
    </Box>
  );
};

export default Page;
