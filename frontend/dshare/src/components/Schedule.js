import React from "react";
import "./styles.css";
import ScheduleSelector from "react-schedule-selector";

class Schedule extends React.Component {
  state = { schedule: [] };
  constructor(props) {
    super(props);
    document.addEventListener("touchstart", {}); // in iframe
  }

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };


    render() {return (
      <div className="Schedule">
        <h1>Driving Times</h1>
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={5}
          minTime={8}
          maxTime={23}
          hourlyChunks={4}
          selectionScheme='linear'
          onChange={this.handleChange}
          dateFormat="ddd M/D"
          timeFormat="h:mma"
        />
      </div>
    );
  }

  times = () => {
    return this.state.schedule;
  };
}

export default Schedule;
