import timedata from "./data.json";
import './App.css';
import {useState} from "react";

function App() {

  let [Timeframe, setTimeframe] = useState("day");

  function updatecurrentTime(idx, Timeframe){
    if(Timeframe==="day") return timedata[idx].timeframes.daily.current;
    else if(Timeframe==="week") return timedata[idx].timeframes.weekly.current;
    else if(Timeframe==="month") return timedata[idx].timeframes.monthly.current;
  }

  function updatepreviousTime(idx, Timeframe){
    if(Timeframe==="day") return timedata[idx].timeframes.daily.previous;
    else if(Timeframe==="week") return timedata[idx].timeframes.weekly.previous;
    else if(Timeframe==="month") return timedata[idx].timeframes.monthly.previous;
  }

  const timeComponents = timedata.map((time, idx)=>
    <TrackedTime title={time.title} timeframes={Timeframe} current={updatecurrentTime(idx, Timeframe)} previous={updatepreviousTime(idx, Timeframe)}/> 
  );

  return (
    <>
    <div className="wrapper">
      <div className="profile">
        <div className="user">
          <div className="pic"></div>
          <div className="repfor">Report for</div>
          <div className="name">Jeremy Robson</div>
        </div>

        <div className="time">
          <button className="daily" onClick={()=>setTimeframe("day")}>Daily</button>
          <button className="weekly" onClick={()=>setTimeframe("week")}>Weekly</button>
          <button className="monthly" onClick={()=>setTimeframe("month")} >Monthly</button>
        </div>
      </div>
      
      {timeComponents}
      
      

  </div>
  <Attribution />
  </>
  );
}



function TrackedTime(props){
  return(
    <div className={"tracktime " + props.title}>
    <div className={"top " + props.title}>
      <div className="title">{props.title}</div>
      <div className="showntime">
        <div className="current">
          {props.current}hrs
        </div>
        <div className="previous">
          Last {props.timeframes} - {props.previous}hrs
        </div>
      </div>
    </div>
  </div>
  )
}

function Attribution(){
  return (
    <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.github.com/juurom">Juurom</a>.
  </div>
  )
}

export default App;
