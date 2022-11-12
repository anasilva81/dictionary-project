import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
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
  );
}

export default App;
