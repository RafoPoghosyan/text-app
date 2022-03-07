import React from "react";
import {Route, Redirect} from "react-router";
import {useSelector} from "react-redux";

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useSelector(state => state);
    const Component = React.cloneElement(children, {...rest});
    return (
        <Route
            {...rest}
            render={() =>
                user?.uid ? (
                    Component
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute