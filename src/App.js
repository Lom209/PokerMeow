import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

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
<a class="twitter-timeline" href="https://twitter.com/ufc?ref_src=twsrc%5Etfw">Tweets by ufc</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  );
}

export default App;
