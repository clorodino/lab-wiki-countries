import './App.css';
import { Route, Switch } from 'react-router';

import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import ErrorPage from './components/ErrorPage';

import countriesDB from './countries.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <CountriesList countries={countriesDB} />
          </div>

          <div className="col">
          <Switch>
            <Route exact path="/" />
            <Route
              exact
              path="/:id"
              render={(props) => (
                <CountryDetails {...props} countries={countriesDB} />
              )}
            />
            <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

// <CountryDetails {...props} countries={countriesDB} /> --> Explanation of what it is by element ⬇️⬇️
// Function ----> Group of parameters ({...props}) // single parameters parameterName={dataWePass}

export default App;
