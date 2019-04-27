// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Checkbox from './Checkbox'
// import {render} from 'react-dom'

// const dataPoints =[];


// class App extends Component {
//   state = {
//     party: '',
//     year: '',
//     number: '',
//     bar: '', 
//     isLoading:false,
//     checkedRepublican: false,
//     checkedDemocrat: false,
//     checkedOther: false,

//   }


//   doFetch = () => {
//     console.log('Hitting refresh');
//     this.setState({
//       isLoading: true,
//     });
//     fetch("./floridadata.json")
//       .then(data => {
//         return data.json()}) 
//       .then(data => {
//         console.log("Got the data!", data);

//       this.setState({
//         data: data,
//         party: data.party,
//         number: data.number,
//         height: Math.round(data.number/5000000 * 100),
//         year: Math.round(data.year),
//         isLoading: false,
//       });
//     });

//   }

//   handleCheckboxChangeRepublican = (ev) =>
//     // this.setState ({checked: ev.target.checked})
//     this.setState ({checkedRepublican: true,
//                     // party: data.republican})

//   handleCheckboxChangeDemocrat = (ev) =>
//     // this.setState ({checked: ev.target.checked})
//     this.setState ({checkedDemocrat: true})

//   // handleCheckboxChangeOther = (ev) =>
//   //   this.setState ({checked: ev.target.checked})

//   // gatherdataRepublican = (ev) =>
//   //   this.setState ({party: data.republican})

//   // componentDidMount = (ev) => {
//   //   this.doFetch();
//   // }



//   onRefresh = () => {
//     console.log('hitting refresh', this.state);
//     fetch("./data/floridadata.json")
//       .then(response => response.json())
//       .then(data => {
//         console.log('receiving data', data);
//       })
//   }

//   render() {
//     const options = {
//       title: {
//         text: "Florida Party Affiliation from 1972 to 2006"
//       },
//       axisY: {
//         title: "% out of 5,000,000",
//         includeZero: true
//       },
//       data: [{
//         type: "bar",
//         xValueFormatString: "YYYY",
//         yvalueFormatString: "#,###,###",
//         dataPoints: dataPoints,
//       }]
//     }
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>

//         <div style={{ fontFamily: 'system-ui' }}>
//           <label>
//             <Checkbox
//               checked={this.state.checkedRepublican}
//               onChange={this.handleCheckboxChangeRepublican}
//               // this.state.checkedRepublican ? data.filter(function(item){
//               //   return item.party === "Republican" && item.number }) : []
        
              
//             />
//             <span style={{ marginLeft:8 }}>Republican</span>
//           </label>

//           <label>
//             <Checkbox
//               checked={this.state.checkedDemocrat}
//               onChange={this.handleCheckboxChangeDemocrat}
//             />
//             <span style={{ marginLeft:8 }}>Democrat</span>
//           </label>

//           <label>
//             <Checkbox
//               checked={this.state.checked}
//               onChange={this.handleCheckboxChangeOther}
//             />
//             <span style={{ marginLeft:8 }}>Others</span>
//           </label>
//         </div> 

//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
  }

  componentDidMount(){
    this.doFetch()
  }


  doFetch(){
    console.log('Hitting refresh');
    this.setState({
      isLoading: true,
    });
    fetch("./floridadata.json")
      .then(data => {
        return data.json()}) 
      .then(data => {
        console.log("Got the data!", data);

      this.setState({
        data: data,
      });
    });

  }



  render(){
    return (
      <div className="Container">
        <div className="Container-img">
        </div>
        <div className="Container-title">
          <h1> Florida Voter Registration 1972-2016</h1>
        </div>

        <div className="Container-graph">
          {this.state.data.map(function(entry){


          const number = entry.Number;
          const height = Math.round(entry.Number/5000000*100);

          const heightStyle = height + "%"; 

            return (<p className="bar" style={{height: heightStyle}}>{entry["Number"]}</p>)
          })}
        </div>
      </div>
    );
  }
}

export default App;

