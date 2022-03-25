import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import HRLoginPageMain from "./screen/HRLoginScreen/HRLoginPageMain";
import Routers from "./Routes";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Routers />
            </div>
        </Provider>
    );
}

export default App;
