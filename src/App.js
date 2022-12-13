import "./App.scss";

import { Provider } from "react-redux";

import Store from "./store/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">Post Blog</div>
    </Provider>
  );
}

export default App;
