import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    // const ar=["arafat","rohit","shaik"]
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}

            <ol key="relativeList">
                <li key="relativeListItem1">sravya</li>
                <li key="relativeListItem2">sravya1</li>
            </ol>
            </div>
        )
    }
}


export default App;
