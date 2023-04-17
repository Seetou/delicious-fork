import {
  Home,
  About,
  Page404,
  RecipeDetails,
  ResultsPage,
  Simulator,
} from "../src/assets/Pages";
import OverlayComponent from "./Components/OverlayComponent";

import { Header } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginModal from "./Components/LoginModal";
import UserAccount from "./assets/Pages/UserAccount";
import ProtectedRoute from "./assets/Pages/ProtectedRoute";
import { useContext } from "react";
import { AppContext } from "./Components/GlobalContext";
import FooterComp from "./Components/FooterComp";

const App = () => {
  const { showOverlayComponent, setShowOverlayComponent } =
    useContext(AppContext);
  return (
    <BrowserRouter>
      <LoginModal />
      <Header />
      {showOverlayComponent && <OverlayComponent />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:name" element={<RecipeDetails />} />
        <Route path="/category/:name" element={<ResultsPage />} />
        <Route path="/simulator/" element={<Simulator />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <UserAccount />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
