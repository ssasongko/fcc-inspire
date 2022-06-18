import './App.css';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div id="quote-box" className='border p-5'>
        <div className='flex flex-col'>
          <h2 id="text">The two most important days in your life are the day you are born and the day you find out why.</h2>
          <p id="author" className="text-right">Nur Sasongko</p>
          <div>
            <button id="new-quote">New Qoute</button>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">Twitter Qoute</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
