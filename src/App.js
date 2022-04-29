import "./App.css";
import { Provider } from "react-redux";
import Routers from "./Routes";
import store from "./store";
import Snackbars from "./components/snackbar/Snackbar";

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
