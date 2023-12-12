import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const fetchMusic = async () => {
    try {
      const response = await axios.get("https://localhost:7149/api/Songs");
      console.log(response);
    } catch (error) {
      console.warn("Error in fetchMusic request: ", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <button onClick={fetchMusic}>Fetch Music</button>
    </div>
  );
}

export default App;
