/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import React from "react";
import { Box } from "@mui/material";
import { VegaLite } from "react-vega";
import spec from "/src/test.json";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <VegaLite spec={spec} />
    </Box>
  );
}

export default App;
