//корневой файл или компонент который оборачивает все страницы
import "@/styles/globals.scss";
import AppLayout from "@/components/AppLayout";

const App = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <main>
        <Component {...pageProps} />
      </main>
    </AppLayout>
  );
};

export default App;
