import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import ViewStudentComponent from "./components/ViewStudentComponent";
import CreateStudentComponent from "./components/CreateStudentComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListStudentComponent}></Route>
              <Route path = "/students" component = {ListStudentComponent}></Route>
              <Route path = "/add-student" component = {CreateStudentComponent}></Route>
              <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
              {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
  );
}

export default App;
