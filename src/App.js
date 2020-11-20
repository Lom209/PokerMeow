import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function App() {
  return (
    <div>
    <Alert variant="success">
<Alert.Heading>Welcome to Fight Finder</Alert.Heading>
<p>
Come here to find information about events & tweets
</p>
</Alert>
<div class="ufc-feed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="ufc"
  options={{height: 600, width: 250}}
/>
</div>
<div class="bellator-feed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="BellatorMMA"
  options={{height: 600, width: 250}}
/>
</div>
<div class="onefc-feed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="ONEChampionship"
  options={{height: 600, width: 250}}
/>
</div>
<div class="cw-feed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="CageWarriors"
  options={{height: 600, width: 250}}
/>
</div>
<div class="bkfc-feed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="bareknucklefc"
  options={{height: 600, width: 250}}
/>
</div>

    </div>
  );
}

export default App;
