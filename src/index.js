import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-zy2nlx15djsw2ph6.us.auth0.com
// mLxTuX0p847OsFMuFfA3o0mg9ZhQ3k1q
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-zy2nlx15djsw2ph6.us.auth0.com"
    clientId="mLxTuX0p847OsFMuFfA3o0mg9ZhQ3k1q"
    authorizationParams={{
      redirect_uri: window.location.origin,
      // could be a problem
      cacheLocation: localStorage,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
