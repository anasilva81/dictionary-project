import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div classNme="container">
      <div className="App">
        <header className="App-header"></header>
        <h1>Dictionary App</h1>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
