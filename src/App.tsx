import React from "react";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  const { t } = useTranslation();

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
    window.history.replaceState(
      {},
      "",
      window.location.pathname + `?language=` + language
    );
  };
  return (
    <Router>
      <div className="App">
        <nav
          style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
        >
          <select
            value={i18n.language}
            onChange={(e) => switchLanguage(e.target.value)}
          >
            {[
              ["English", "en"],
              ["Hindi", "hi"],
              ["Telugu", "te"],
            ].map(([value, label]) => (
              <option key={label} value={label}>
                {value}
              </option>
            ))}
          </select>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h3>{t("hi")}</h3>
            <h3>{t("message")}</h3>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
