import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import HRLoginPageMain from "./screen/HRLoginScreen/HRLoginPageMain";
import Routers from "./Routes";
import store from "./store";
import Snackbars from "./components/Snackbar";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Snackbars />
                <Routers />
            </div>
        </Provider>
    );
}

export default App;
