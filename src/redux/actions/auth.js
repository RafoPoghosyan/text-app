import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,  signOut } from 'firebase/auth';

export const login = (user, history) => {
    return (dispatch) => {
      const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((data) => {
          dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
          history.push('/dashboard')
        })
        .catch(e => dispatch({ type: 'LOGIN_ERROR' }));
    };
  };
  
  export const logout = (history) => {
    return (dispatch) => {
      const auth = getAuth();
      signOut(auth).then(() => {
        dispatch({type: 'LOGOUT_SUCCESS'})
        history.push('/login');
      })

    };
  };
  
  
 export const register = (user, history) => {
    return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password).then(data => {
        dispatch({ type: 'REGISTER_SUCCESS', payload: data.user });
        history.push('/dashboard');
      }).catch(e => console.log(e))
    };
  };