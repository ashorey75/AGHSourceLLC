import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
//import Users from "./user/pages/Users";
import HomeNew from "./user/pages/HomeNew";
//import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
//import UserPlaces from "./places/pages/UserPlaces";
//import UpdatePlace from "./places/pages/UpdatePlace";
//import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import Boroughs from "./places/pages/Boroughs";
import Boro from "./places/pages/Boro";
import Footer from "./shared/components/Navigation/Footer";
import ContactUs from "./user/pages/ContactUs";
import WIP from "./user/pages/WorkInProgress";
import Products from "./user/pages/Products";
import DevTag from "./shared/components/Navigation/DevTag";
import Zipper from "./user/pages/Zippers";
import CustomSliders from "./user/pages/CustomSliders";
import CustomTape from "./user/pages/CustomTape";
import RelatedProducts from "./user/pages/RelatedProducts";



const Auth = React.lazy(() => import("./user/pages/Auth"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));

function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/boroughs" exact>
          <Boroughs />
        </Route>
        <Route path="/places/boroughs/:boro" exact>
          <Boro />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/:placeId" exact>
          <UpdatePlace />
        </Route>
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
        <Route path="/products/:category" exact>
          <Products />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        {/*
        <Route path="/products/zippers" exact>
          <Products />
        </Route>
        <Route path="/products/sliders" exact>
          <CustomSliders />
        </Route>
        <Route path="/products/tape" exact>
          <CustomTape />
        </Route>
        <Route path="products/other" exact>
          <RelatedProducts />
        </Route>
        */}
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
