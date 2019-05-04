import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs.js';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
    tabs: ['Republican', 'Democrat', 'Other','All'],
    showRepublicans: false,
    showDemocrats: true,
    showOther: true,
    showAll: true,
    Party: '',
  }

  componentDidMount(){
    this.doFetch()
  }

  setCurrentTab = (tabName) => {
    this.setState({
      Party: tabName,
    });
  }

  setCurrentTab2 = (tabName) => {
    this.setState({
      currentTab2: tabName,
    });
  }

  toggleRepublicans() {
    console.log('elephant');
    this.setState({
      showRepublicans: true,
      Party: 'Republican',
    })

  }

  toggleDemocrats() {
    console.log('donkey');
    this.setState({
      showDemocrats: true,
      Party: 'Democrat',
    })
  }

  toggleOthers() {
    console.log('leaf');
    this.setState({
      showOther: true,
      Party: 'Other',
    })
  }

  toggleAll() {
    console.log('usa');
    this.setState({
      showAll: true,
      Party: '',
    })
  }

  dataFor(party){
    return this.state.data.filter(function(item){
      return item.Party === party
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
          <Tabs
            tabs={this.state.tabs}
            currentTab={this.state.Party}
            onChange={this.setCurrentTab.bind(this)} />
        </div>
        <div className="Container-title">
          <h1> Florida Voter Registration 1972-2016</h1>
        </div>

        <div className="Container-graph">
          {this.dataFor(this.state.Party).map(function(entry){

          const party = entry.Party;
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

