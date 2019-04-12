import React from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return(
        <h1>Smurf List</h1>
        )
    }
}

const mapStateToProps= state => {
    console.log(state)
    return {
        smurfs: state.data

    }
}

export default connect(null, { getSmurfs })(SmurfList)