import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

interface ILoadingState {
  isLoading: boolean;  //to check the loading status
}

const Loader = (props: ILoadingState) => {
  const { isLoading } = props;
  return (
    <Backdrop
      sx={{ color: "#0969da", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
