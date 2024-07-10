import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FirstLoginForm from "./Components/FirstLoginForm";
import FirstSignUpForm from "./Components/FirstSignUpForm";
import { createTheme, ThemeProvider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstLoginForm />}></Route>
            <Route
              path="/FirstSignUpForm"
              element={<FirstSignUpForm />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
