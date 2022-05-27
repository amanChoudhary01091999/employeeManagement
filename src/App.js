import "./App.css";
import { Provider } from "react-redux";
import Routers from "./Routes";
import store from "./store";
import Snackbars from "./components/snackbar/Snackbar";
import { CircularProgress } from "@mui/material";
import Spinner from "./components/spinner/Spinner";

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
