import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.BUY}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
