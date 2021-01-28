
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/homepage';
import ArtPage from './pages/ArtPage/artpage';
import VideoPage from './pages/VideoPage/videopage';


function App() {
  return (
    <div className="App">

        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/art' component={ArtPage}/>
          <Route exact path='/video' component={VideoPage}/>
        </Switch>
    </div>
  );
}

export default App;
