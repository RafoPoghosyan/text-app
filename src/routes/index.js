import {Route, Switch} from 'react-router';

import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Registration from '../components/registration';
import PrivateRoute from './privateRoute';
import React from "react";


const Routes = () => {


    return <Switch>
        <Route exact path="/"><Registration/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/registration"><Registration/></Route>
        <PrivateRoute asa={12} path="/dashboard"><Dashboard/></PrivateRoute>
    </Switch>


}
export default Routes