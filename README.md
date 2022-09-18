# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Personal note about the Context API

Context can be used to share state between multiple components without needing to pass state down through the component tree (component drilling).

### Creating Context

The `createContext()` hook takes in an initial state and returns a context. For `alertContext`, the initial state is null.

### Using the Reducer

The Reducer is a function that takes in (`state`, `action`) and returns a plain object. The `state` is our app/component state (e.g., null for Alert). The `action` is usually a constant (that's just a STRING_KINDA_LIKE_THIS that describes what's happening). `action` has two variables, `type` & `payload`.

Later in AlertState, we use the `useReducer` hook which returns a tuple: `(State, Dispatch)`. Dispatch is needed to dispatch reducer actions. So we "dispatch" actions, which are our types (e.g., REMOVE_ALERT).

### Providing Context

In AlertState, we provide <AlertContext.Provider> which allows the children props to use its functions (`setAlert()`) which "dispatch" the "actions" (SET_ALERT, REMOVE_ALERT) to the global state.

Later in our Search Component, we use the hook `useContext()` to access the `setAlert()` function "provided" by us from the Context Provider (AlertContext.Provider).

### Read more about Context but Simplified

I made these examples around this page: https://javascript.plainenglish.io/react-context-simplified-86e1e8ce2d73
