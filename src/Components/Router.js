import PropTypes from "prop-types";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import AuthContainer from "../Routes/Auth";

const LoggedInRoutes = () => <><Route path="/" component={Feed}></Route></>

const LoggedOutRoutes = () => <><Route exact path="/" component={AuthContainer} /></>

const AppRouter = ({isLoggedIn}) => <Router><Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch></Router> 

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter;