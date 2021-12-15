import logo from './logo.svg';
import './App.css';
import OAuth2Login from 'react-simple-oauth2-login';
const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);
function App() {
  return (
    <div className="App">

<OAuth2Login
    authorizationUrl="https://stackoverflow.com/oauth"
    responseType="token"
    clientId="21493"
    key="AIJiSoy2nVQM*VzIh3vJYw(("
    redirectUri="https://stackoverflow.com/oauth/access_token/"
    onSuccess={onSuccess}
    onFailure={onFailure}/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
