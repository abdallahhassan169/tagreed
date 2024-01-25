import "./App.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [text, setText] = React.useState("");
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
    setText(data.diacWord);
    if (data) {
      setIsLoading(false);
      setChecked(true);
    }
  };
  return (
    <div className="App">
      <div>
        <h3> -من فضلك ادخل النص -</h3>
        <textarea
          onChange={textChange}
          rows={10}
          style={{ width: "600px", fontSize: "20px", fontWeight: "bold" }}
        />
        <div>
          <button
            style={{ width: "120px", height: "70px", margin: "10px" }}
            onClick={check}
            className="btn btn-success"
            disabled={isLoading}
          >
            {isLoading ? "تحميل..." : "تصحيح"}
          </button>
        </div>
        {checked && (
          <h3
            style={{
              fontWeight: "22px",
              color: "green",
            }}
          >
            {text}
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
