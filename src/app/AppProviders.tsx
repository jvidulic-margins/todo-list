import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Auth } from "entities/session";

import { AppRoutes } from "./routes";
import { store } from "./store";

export const AppProviders = () => {
  return (
    <HelmetProvider>
      {/* <Theme> */}
      <ReduxProvider store={store}>
        <Auth>
          <Router>
            <AppRoutes />
          </Router>
        </Auth>
      </ReduxProvider>
      {/* </Theme> */}
    </HelmetProvider>
  );
};
