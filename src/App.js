import { useState } from "react";
import BarChart from "./components/BarChart";
import { UserData } from "./components/data";
import LineChart from "./components/LineChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["red", "green", "yellow"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <BarChart data={userData} />
      <LineChart data={userData} />
    </>
  );
}

export default App;
