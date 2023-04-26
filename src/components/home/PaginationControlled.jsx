import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import MUI
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationControlled = (props) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    props.pageNumber(page);
  }, [page, props]);

  //coin Data
  const { loading } = useSelector((state) => state.listCoin);

  return (
    <Stack spacing={2}>
      <Pagination
        variant="outlined"
        shape="rounded"
        color="primary"
        count={13}
        page={page}
        onChange={handleChange}
        sx={{
          display: loading ? "none" : "flex",
          justifyContent: "center",
          my: "30px",
        }}
      />
    </Stack>
  );
};
