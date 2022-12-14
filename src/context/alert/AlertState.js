import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
const { useReducer } = require("react");

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  /*
    This Provider will give the Context to the
    subscriber. In this context, App.js provides the
    entire App the ability to use AlertState which
    in turn uses the context. The Search Component
    uses the AlertContext to alarm the user
    to enter something.
    */
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
