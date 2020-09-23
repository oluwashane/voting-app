import React from 'react'

function Results({ store }) {
    function votesAngularToPercent() {
        if (store.getState().angular) {
           return (store.getState().angular / (store.getState().react + store.getState().angular + store.getState().vueJs) * 100)
        } else {
            return 0
        }
    }

    function votesReactToPercent() {
        if (store.getState().react) {
            return(store.getState().react / (store.getState().react + store.getState().angular + store.getState().vueJs) * 100)
        } else {
            return 0
        }
    }

    function votesVueJsToPercent() {
        if (store.getState().vueJs) {
            return(store.getState().vueJs / (store.getState().react + store.getState().angular + store.getState().vueJs) * 100)
        } else {
            return 0
        }
    }

    function voteAngularInPercentStyle() {
        return { 
            width: votesAngularToPercent() + "%" 
        }
    }

    function voteReactInPercentStyle() {
        return { 
            width: votesReactToPercent() + "%" 
        }
    }

    function voteVueJsInPercentStyle() {
        return { 
            width: votesVueJsToPercent() + "%" 
        }
    }

    return (
        <div className="container"> 
            <span className="label label-danger">Angular: {votesAngularToPercent().toFixed(2) + "%"}</span>
            <div className="progress active">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={voteAngularInPercentStyle()}></div>
            </div>
            <span className="label label-danger">React: {votesReactToPercent().toFixed(2) + "%"}</span>
            <div className="progress active">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={voteReactInPercentStyle()}></div>
            </div>
            <span className="label label-danger">VueJs: {votesVueJsToPercent().toFixed(2) + "%"}</span>
            <div className="progress active">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={voteVueJsInPercentStyle()}></div>
            </div>
        </div>
    )
}

export default Results
