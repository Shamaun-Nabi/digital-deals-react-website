import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Individual from "./Individual";
import Services from "./component/Services";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/:id" component={Individual} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
