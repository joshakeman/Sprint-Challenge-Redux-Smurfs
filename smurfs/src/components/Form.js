import React from 'react'
import { connect } from 'react-redux'

class Form extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    

handleChanges = e => {
    this.setState ({
        [e.target.name] : e.target.value
    })
}

addSmurf = e => {
    e.preventDefault()
    this.props.addSmurf()
}
    render() {
        return (
            <form onSubmit={this.addSmurf}>
                <input 
                name="name"
                value={this.state.name}
                placeholder="name"
                onChange={this.handleChanges}
                />
                <input 
                name="age"
                value={this.state.age}
                placeholder="age"
                onChange={this.handleChanges}
                />
                <input 
                name="height"
                value={this.state.height}
                placeholder="height"
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default connect(null, {  })(Form)