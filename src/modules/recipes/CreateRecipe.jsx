import { useContext } from "react";
import { UserContext } from "../user/UserContext";
import { Route, Redirect } from "react-router-dom";

// This should be a CreateRecipe page but his is a protected route!!
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
