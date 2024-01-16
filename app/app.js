'use client'
import { Provider } from "react-redux";
import { store } from "./store";

const App = function App({ children }) {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
