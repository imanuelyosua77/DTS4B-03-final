import './App.css';
import AuthButton from './components/AuthButton';
import MainHeroButton from './components/MainHeroButton';

function App() {
 
  return (
    <div className="App">
      <div className='mainContainer'>
        <nav className="Navigation">
          <p className="logo"><span className='ota'>OTA</span>Quote</p>
          <AuthButton />
        </nav>
        <div className='tagLine'>
          <section>
          <h1>Feeling life is <span className='unfair'>unfair</span> ?</h1>
            <p>
              We help you to Remember that life's not always bad,
              <span className='punchline'> (it's actually worse) </span>
            </p>
            <p>
              you're not the only one that's struggling my friend, Let's Cheer you up
              by Remembering your most Memorable Anime Quotes you've ever heard
            </p>
            <MainHeroButton />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
