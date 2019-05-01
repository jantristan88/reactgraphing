import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs.js';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
    tabs: ['Republican', 'Democrat', 'Other'],
    currentTab: 'Republican',
    showRepublicans: false,
    showDemocrats: true,
    showOther: true,
    Party: '',
  }

  componentDidMount(){
    this.doFetch()
  }

  toggleRepublicans() {
    console.log('elephant');
    this.setState({
      showRepublicans: true,
      Party: 'Republican',
    })
    console.log(this.state.showRepublicans);
      // if (!this.props.)
    // if this.state.showRepublicans === false
    //   then set style="display: none"
      // if this.state.showRepublicans === true
      //   then set style
  }

  toggleDemocrats() {
    console.log('donkey');
    this.setState({
      showDemocrats: !this.state.showDemocrats
    })
  }

  toggleOthers() {
    console.log('leaf');
    this.setState({
      showOther: !this.state.showOther
    })
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

          const party = entry.Party;
          const number = entry.Number;
          const height = Math.round(entry.Number/5000000*100);

          const heightStyle = height + "%"; 

            return (<p className="bar" style={{height: heightStyle}}>{entry["Number"]}</p>)
          })}
          
        </div>

        <div>
          <Tabs
            tabs={this.state.tabs}
            onChange={this.toggleRepublicans.bind(this)} />
        </div>
      
      </div>

      
      
    );
  }
}

export default App;

