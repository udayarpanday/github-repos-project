import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/home";
import RepoDetails from "./pages/repoDetails/repoDetails";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/repo-details/:username/:repo" element={<RepoDetails />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
