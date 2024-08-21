import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomeNew from "./user/pages/HomeNew";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import Footer from "./shared/components/Navigation/Footer";
import ContactUs from "./user/pages/ContactUs";
import WIP from "./user/pages/WorkInProgress";
/*import Products from "./user/pages/Products";*/
import DevTag from "./shared/components/Navigation/DevTag";
import Zipper from "./user/pages/Zippers";
import CustomSliders from "./user/pages/CustomSliders";
import CustomTape from "./user/pages/CustomTape";
import RelatedProducts from "./user/pages/RelatedProducts";
import ScrollToTop from "./shared/components/UIElements/ScrollToTop";



const Auth = React.lazy(() => import("./user/pages/Auth"));


function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomeNew />
        </Route>
        <Route path="/home" exact>
          <HomeNew />
        </Route>
        <Route path="/contactus" exact>
          <ContactUs />
        </Route>
        {/*
        <Route path="/products/:category" exact>
          <Products />
        </Route>
        */}
        <Route path="/auth" exact>
          <Auth />
        </Route>
 
        <Route path="/products/zippers" exact>
          <Zipper />
        </Route>
        <Route path="/products/sliders" exact>
          <CustomSliders />
        </Route>
        <Route path="/products/tape" exact>
          <CustomTape />
        </Route>
        <Route path="/products/other" exact>
          <RelatedProducts />
        </Route>
        <Route path='/instagram' component={() => {
          window.location.href = 'https://instagram.com/melrongroup';
          return null;
        }}/>
        <Route path='/facebook' component={() => {
          window.location.href = 'https://www.facebook.com/profile.php?id=100083303203011';
          return null;
        }}/>
        <Route path='/workinprogress' exact>
          <WIP />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <ScrollToTop />
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
        <DevTag />
        <Footer/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
