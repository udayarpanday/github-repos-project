import React, { useEffect, useState } from "react";
import { Pagination as Page } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useAppDispatch } from "../../store/hooks";
import { repoDetailsAsync } from "../../store/reducer";

const Pagination = ({ pageCount, filterParams }) => {
  const dispatch = useAppDispatch();
  //initial page number
  const [page, setPage] = useState(1);
  //check if search value empty
  const [checkErrors, setDisable] = useState<boolean>(false);

  useEffect(() => {
    console.log(filterParams);
    if (filterParams.page > 0) setPage(filterParams.page);
    //disable page if searchValue not entered
    filterParams.searchValue === "" ? setDisable(true) : setDisable(false);
  }, [filterParams]);

  const handleChange = (event, value) => {
    setPage(value);
    const option = { ...filterParams, page: value };
    //dispatch action for api call to update the page
    dispatch(repoDetailsAsync(option));
  };
  return (
    <Stack spacing={2}>
      <Page
        disabled={checkErrors}
        size="medium"
        page={page}
        count={Math.ceil(pageCount / filterParams.itemsPerPage)}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Pagination;
