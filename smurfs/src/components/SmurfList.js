import React from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return(
        <div className="container">
            <h1>Smurf List</h1>
            <div className="smurf-list">
                {this.props.smurfs.map(smurf =>
                    <div className="smurf-card">
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
    console.log(state.smurfs)
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList)