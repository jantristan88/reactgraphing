import React from 'react';
import './Tabs.css';

const Tabs = props => (
  	<div className="Tabs">
	  	{
	  		props.tabs.map(tab =>( /*each one is called a tab;looping tab*/
	  	
			    <div 
			      	className={
			      		tab === props.currentTab ? ( /*we referred it as a tab default tab per source code*/
			       			"Tabs-tab Tabs-tab--selected" /*if the tab that we are in right now is slected then trigger thesee CSS*/
			       		) : (
			        		"Tabs-tab" /*Tabs-tab tab appearance; the one with selecte is how it would look like if it is selected*/
			        	)
			        }

			        onClick={() => props.onChange(tab)} /*wraps within a specialfunction; when you call it*/
			        key={tab}>
			        {tab}
			  	</div>
			))
		}
	</div>
)



export default Tabs;
