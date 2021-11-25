import './App.css';
import "./components/Home/Home.css"
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, News, Top, About, Form } from "./components/Main";
import Books from './components/Books/Books';

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/"><a href=" "><img src="Logo.png" alt="logo"></img></a></Link>
        <Link to="/"><a href=" ">Home</a></Link>
        <Link to="/Books"><a href=" ">Books</a></Link>
        <Link to="/form"><a href=" ">Register</a></Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/Books" component={Books} />
        <Route path="/news" component={News} />
        <Route path="/top" component={Top} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
      </main>
    </Router>
  )
};

export default App;
