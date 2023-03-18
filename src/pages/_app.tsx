//корневой файл или компонент который оборачивает все страницы
import { AppProps } from "next/app";
import "../styles/globals.scss";
import AppLayout from "../components/AppLayout";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <main>
        <Component {...pageProps} />
      </main>
    </AppLayout>
  );
};

export default App;
