
import ContactsPage from "pages/ContactsPage";

import LoginPage from "pages/LoginPage";
import RegistrationPage from "pages/RegistrationPage";
import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import SignIn from "./SignIn/SignIn";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignIn />} />
        <Route path="registration" element={<RestrictedRoute
          redirectTo="/contacts"
          component={<RegistrationPage />}
        />} />
        <Route path="login" element={<RestrictedRoute
          redirectTo="/contacts"
          component={<LoginPage />}
        />} />
        <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );
};

export default App;
