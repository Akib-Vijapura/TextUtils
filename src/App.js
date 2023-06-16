import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toToggleMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
      document.body.style.backgroundColor = "#050F25";
      document.body.style.color = "white";
      showAlert(" DarkMode has been enable", "success ");
    } else {
      setThemeMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" LightMode has been enable", "success ");
    }
  };
  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={themeMode} toggleMode={toToggleMode} />

        <Alert alert={alert} />
        <Switch>
          <div className="container my-3">
            <Route path="/" exact>
              <TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={themeMode}
              />
            </Route>
            <Route path="/about">
              <About mode={themeMode} />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
