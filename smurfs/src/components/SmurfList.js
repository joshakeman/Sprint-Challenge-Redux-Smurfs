import React from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

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
        <div className="container">
            <div className="smurf-list">
                {this.props.smurfs.map(smurf =>
                    <div key={smurf.name} className="smurf-card">
                        <h2>{smurf.name}</h2>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                )}
            </div>
        </div>
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