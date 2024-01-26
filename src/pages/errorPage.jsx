import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import img from "../assets/undraw_Warning_re_eoyh.png";

const Error = () => {
  let error = useRouteError();
  console.error(error);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: { xs: "300px", md: "600px" } }}>
        <img src={img} alt="error" width="100%" />
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          variant="body1"
          color="primary"
        >
          {error.status} {error.statusText}
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
