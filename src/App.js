import './App.css';
import AreaChart2 from './components/AreaChart/AreaChart';
import CustomContentOfTooltip from './components/CustomContentOfTooltip/CustomContentOfTooltip';
import Chart from './components/SimpleChart/Chart';
import SpecifiedDomainRadarChart from './components/SpecifiedDomainRadarChart/SpecifiedDomainRadarChart';

function App() {
  return (
    <div className="App">
    <SpecifiedDomainRadarChart></SpecifiedDomainRadarChart>
    <CustomContentOfTooltip></CustomContentOfTooltip>
    <AreaChart2></AreaChart2>
      <Chart></Chart>
    </div>
  );
}

export default App;
