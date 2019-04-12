import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


import { getSmurfs } from '../actions'

import Smurf from './Smurf'
import EditForm from './EditForm'

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        if (this.props.smurfs.length === 0) {
            return (
            <div>
                <p>Smurfs on the way...</p>
                <p>Uh oh, something's wrong with the smurf servers: </p>
                <p>{this.props.error}</p>
            </div>
            )
        }

        return(
        <Router>
        <div className="container">
            <div className="smurf-list">
                {this.props.smurfs.map(smurf =>
                    <div key={smurf.name} className="smurf-card">
                       <Smurf smurf={smurf} />
                    </div>
                )}
            </div>
            <Route path="/edit/:smurfId" render={props => <EditForm smurfs={this.props.smurfs} {...props}/>}/>
        </div>
        </Router>         
        )
    }
}

const mapStateToProps= state => {
    console.log(state)
    return {
        smurfs: state.smurfs,
        // error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList)