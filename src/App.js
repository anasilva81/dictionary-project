import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="AppHeader">
          <header className="fixed-top App-header">
            <h1>Dictionary App</h1>
          </header>
        </div>
        <main>
          <Dictionary defaultKeyword="Word" />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
