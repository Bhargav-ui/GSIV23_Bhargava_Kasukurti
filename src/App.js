import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import SearchIcon from "@mui/icons-material/Search";
import MoviesListContainer from "./components/MoviesListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MovieDetailsBlock from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MoviesListContainer />} />
            <Route path="/details/:id" element={<MovieDetailsBlock />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
