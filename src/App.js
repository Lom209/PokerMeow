import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Alert variant="success">
<Alert.Heading>Hey, nice to see you</Alert.Heading>
<p>
Aww yeah, you successfully read this important alert message. This example
text is going to run a bit longer so that you can see how spacing within an
alert works with this kind of content.
</p>
<hr />
<p className="mb-0">
Whenever you need to, be sure to use margin utilities to keep things nice
and tidy.
</p>
</Alert>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pokermeows - Coming Soon.
        </p>
      </header>
    </div>
  );
}

export default App;
