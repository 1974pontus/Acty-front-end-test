import { useState, useEffect } from "react";
import "./App.css";
import Enviromental from "./components/Enviromental/Enviromental";
import Social from "./components/Social/Social";
import Governance from "./components/Governance/Governance";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.acty.se";

    const getData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    getData();
  }, []);

  const categories = data.map((item) => item.categories);
  const environmental = categories.filter(
    (category) => category === "Environmental"
  );
  const social = categories.filter((category) => category === "Social");
  const governance = categories.filter((category) => category === "Governance");

  console.log(social);

  return (
    <div className="App">
      <div className="heading">
        <h1 className="title">ESG Scoring</h1>
        <p className="subtitle">
          This is a list of top 5 companies in each ESG category
        </p>
      </div>
      <div className="green">
        <div className="circlerow">
          <div className="greenCircle"></div>
          <p className="category">{environmental[0]}</p>
        </div>
        <Enviromental data={data} />
      </div>
      <div className="yellow">
        <div className="circlerow">
          <div className="yellowCircle"></div>
          <p className="category">{social[0]}</p>
        </div>
        <Social data={data} />
      </div>
      <div className="blue">
        <div className="circlerow">
          <div className="blueCircle"></div>
          <p className="category">{governance[0]}</p>
        </div>
        <Governance data={data} />
      </div>
    </div>
  );
}

export default App;
