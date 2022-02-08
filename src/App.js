import "./App.css";
import Footer from "./components/Footer";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeftSide />
        <RightSide />
        <Footer />
      </header>
    </div>
  );
}

export default App;
