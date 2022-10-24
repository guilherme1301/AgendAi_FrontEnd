import BasePage from "../components/pageComponents/basePage";
import "../styles/Home.module.css";
import { Provider } from "./contexts/userContext";
import { ProtectedRoute } from "./protectedRoute";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ProtectedRoute>
        <BasePage>
          <Component {...pageProps} />
        </BasePage>
      </ProtectedRoute>
    </Provider>
  );
}

export default MyApp;
