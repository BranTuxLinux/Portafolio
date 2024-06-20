import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./assets/scss/stylesheets.scss";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "./translation/translate.init.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <BrowserRouter>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </NextThemesProvider>
    </BrowserRouter>
  </NextUIProvider>
);
