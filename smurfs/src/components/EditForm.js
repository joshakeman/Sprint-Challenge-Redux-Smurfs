import React from 'react'
import { connect } from 'react-redux'
import { addSmurf, editSmurf } from '../actions'


class EditForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
        currentSmurf: {
            name:'',
            age:'',
            height:''
        }
    }
    
    componentDidMount(){
        const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === this.props.match.params.smurfId)
        this.setState({
            currentSmurf: smurf,
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        })
    }

handleChanges = e => {
    this.setState ({
        [e.target.name] : e.target.value
    })
}

addSmurf = e => {
    e.preventDefault()

    const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    }

    this.props.addSmurf(newSmurf)

    this.setState ({
        name: '',
        age: '',
        height: ''
    })
}

editSmurf = e => {
    e.preventDefault()
    const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === this.props.match.params.smurfId)
    console.log(smurf)
    const newSmurf = {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
    }

    this.props.editSmurf(smurf.id, newSmurf)
    this.props.history.push("/")
}

    render() {
        return (
            <div className="return-form">
            <form onSubmit={this.editSmurf}>
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
                <button>Update Smurf</button>
            </form>
            </div>
        )
    }
}

export default connect(null, { editSmurf })(EditForm)