import "antd/dist/antd.css";
import "./components/styles/main.css";
import "./components/styles/responsive.css";
import Home from "./components/dashboard/pages/Home";
import Tables from "./components/dashboard/pages/Tables";
import Setting from "./components/dashboard/pages/Setting";
import ErrorLogin from "./components/auth/signin/ErrorLogin";
import FormSignin from './components/auth/signin/FormSigIn';
import {  Switch, Route  } from "react-router-dom";
import {  Redirect } from "react-router-dom";
import NotFound from "./components/404";
import Form from "./components/auth/signup/Form";
import FormSuccess from "./components/auth/signup/FormSuccess";

function App() {
  return (
    <div className="App">

          <Switch>
                <Route path="/login" component={FormSignin} />
                <Route path="/notfound" component={NotFound} />
                <Route path="/error" component={ErrorLogin} />
                <Route path="/singup" component={Form} />
                <Route path="/singup" component={Form} />
                <Route path="/success" component={FormSuccess} />

                  <Route exact path="/dashboard" component={Home} />
                  <Route exact path="/tables" component={Tables} />
                  <Route exact path="/setting" component={Setting} />

                  <Redirect from="*" to="/notfound" />
          </Switch>


    </div>
  );
}

export default App;
