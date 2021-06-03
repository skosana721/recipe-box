import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
