import React from "react";
import Pagination from "@mui/material/Pagination";

function CustomPagination({ count, page, onChange, sx }) {
  if (count <= 1) {
    return null;
  }

  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      sx={sx}
      color="primary"
    />
  );
}

export default CustomPagination;
