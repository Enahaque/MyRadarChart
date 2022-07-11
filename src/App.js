import './App.css';
import MyLineChart from './Components/MyLineChart/MyLineChart';
import MyPieChart from './Components/MyPieChart/MyPieChart';
import MyRadarChart from './Components/MyRadarChart/MyRadarChart';

function App() {
  return (
    <div className="App">
      <h1>Roll with Recharts</h1>
      <MyLineChart></MyLineChart>
      <MyPieChart></MyPieChart>
      <MyRadarChart></MyRadarChart>
    </div>
  );
}

export default App;
