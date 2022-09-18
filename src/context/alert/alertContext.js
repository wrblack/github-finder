import { createContext } from "react";

/*
When React renders the Alert component,
which subscribes to this Context object,
it will read the current context value from
the AlertContext Provider.
*/
const alertContext = createContext();

export default alertContext;
