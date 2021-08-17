import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Home />
      </Sidebar>
    </div>
  );
}

export default App;
