import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// import MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

//react Icon
import { BsSearch } from "react-icons/bs";

//components
import { BasicList } from "./BasicList";

export const Landing = () => {
  //list redux
  const { loading } = useSelector((state) => state.listCoin);

  //search text
  const [state, setState] = useState("");

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 2 },
          display: loading ? "none" : "flex",
          alignItems: "flex-center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <BsSearch size="1.5em" style={{ margin: "3px 10px" }} />
          <TextField
            id="input-with-sx"
            label="Search"
            variant="standard"
            sx={{ width: "50ch" }}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </Box>
      </Box>

      <BasicList text={state} />
    </>
  );
};
