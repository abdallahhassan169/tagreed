import { Box, Typography, Stack, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useState } from "react";
import NavBar from "../components/navBar";
import LayOut from "../components/layout";
import React from "react";
import axios from "axios";
const Home = () => {
  const [text, setText] = React.useState("");
  const [corrText, setCorrText] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const textChange = (e) => {
    if (checked) setChecked(false);
    setText(e.target.value);
  };
  const check = async () => {
    setIsLoading(true);
    const url = "https://cwg.sahehly.com/Diac/Sahehly";

    const payload = {
      "g-flag": true,
      type: "SSahahlyWebSite",
      word: text,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Basic V2ViU2FoZWhseTo4dVc1c2FkN2dGRzJC",
    };
    const response = await axios.post(url, payload, { headers });
    const data = response.data;
    setCorrText(data.diacWord);
    if (data) {
      setIsLoading(false);
      setChecked(true);
    }
  };
  return (
    <Box className="home" sx={{ position: "relative" }}>
      <LayOut />
      <NavBar />
      {/* start correct mistake type */}
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: "10px", width: { xs: "300px", md: "600px" } }}>
          <textarea
            className="textArea"
            name="textType"
            placeholder="ادخل النص المراد تصحيحة"
            rows="10"
            value={text}
            style={{ width: "98%", marginTop: "70px" }}
            onChange={textChange}
          ></textarea>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "10px",
            }}
          >
            <Button
              className="correct_btn"
              onClick={check}
              disabled={text ? false : true}
            >
              {isLoading ? "...تحميل" : "ابدء التصحيح"}{" "}
            </Button>
            <Button
              className="reset_btn"
              disabled={text === ""}
              onClick={() => {
                setText("");
              }}
            >
              {" "}
              نص جديد
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "300px", pt: "50px" }}>
          <Typography
            variant="p"
            component="p"
            sx={{
              background: "#1976d2",
              textAlign: "center",
              color: "#fff",
              p: "15px 10px",
              mt: "40px 0 0 0",
              fontWeight: "bold",
            }}
          >
            اظهار الاخطاء ان وجد
          </Typography>
          <KeyboardDoubleArrowDownIcon
            sx={{
              width: "300px",
              textAlign: "center",
              mt: "15px",
              mb: "10px",
              color: "#1976d2",
            }}
          />
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography
              variant="body1"
              color="green"
              sx={{
                textAlign: "center",
                mt: "20px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {corrText}
            </Typography>
          )}
        </Box>
      </Box>
      {/* end correct mistake type */}
    </Box>
  );
};
export default Home;
