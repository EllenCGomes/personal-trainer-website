import React from "react";
import { ConfigProvider } from "antd";
import ptBRIntl from "antd/es/locale/pt_BR";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const themeConfig = {
  cssVar: true,
  token: {
    colorTextBase: "rgba(0, 0, 0, 0.85)",
    fontFamily: `'Open Sans', sans-serif`,
    // colorPrimary: '#AD974F',
    // colorPrimary: "#8E793E",
    // colorPrimary: "#E4B04A",
    // colorPrimary: "#d1b66b",
    colorPrimary: "#e9d6ac",
    colorLink: "#ffffff",
    // colorLinkHover: "#EACC61",
    colorLinkHover: "#e9d6ac",
    colorInfo: "#e9d6ac",
    colorInfoBg: "#fcf0ff",
    colorInfoBorder: "#e9d6ac",
  },
  components: {
    Layout: {
      // headerPadding: 0,
      headerHeight: 64,
      headerBg: "#fffff",
    },
    Menu: {
      itemColor: "#ffffff",
      itemHoverColor: "#e9d6ac",
    },
    Typography: {
      fontSizeHeading1: 110,
    },
  },
};

ConfigProvider.config({ theme: themeConfig });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={ptBRIntl} theme={themeConfig}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
