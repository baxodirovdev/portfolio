import { Header } from "../components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Work } from "../components/Work/Work";
import { Contact } from "../components/Contact/Contact";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
