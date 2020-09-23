import React from 'react'
import {voteAngular, voteReact, voteVueJs} from '../redux/action'

const Main = ({store}) => {
    function handleVoteAngular() {
        store.dispatch(voteAngular())
    }

    function handleVoteReact() {
        store.dispatch(voteReact())
    }

    function handleVoteVueJs() {
        store.dispatch(voteVueJs())
    }

    return (
        <div>
            <div className="jumbotron" style={{"textAlign": "center"}}>
            <h1>Company Logo</h1>
            <h2>What is your favorite frontend framework in 2017</h2>
            <h4>Click on the logos below to vote</h4>
            <br />
            <div className="row">
                <div className="offset-md-3 col-md-2"> 
                <img src="images/angular.jpg" alt="Angular" height="96" onClick={handleVoteAngular}></img>
                </div>
                <div className="col-md-2"> 
                <img src="images/react.jpg" alt="React" height="96" onClick={handleVoteReact}></img>
                </div>
                <div className="col-md-2"> 
                <img src="images/vue.jpg" alt="VueJs" height="96" onClick={handleVoteVueJs}></img>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main
