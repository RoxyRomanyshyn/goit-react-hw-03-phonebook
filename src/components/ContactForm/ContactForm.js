import React, {
    Component
} from 'react';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = e => {
        const {
            name
        } = e.target
        this.setState({
            [name]: e.target.value
        });
    };

    nameChecking() {
        let check = false;
        this.props.contacts.forEach(stateContact => {
            if (stateContact.name.toLowerCase() === this.state.name.toLowerCase()) {
                check = this.state.name;
            }
        })
        return check
    }

    handleSubmit = e => {
        e.preventDefault();
        let check = true;
        if (this.nameChecking()) {
            alert(`${this.nameChecking ()} is already in contact`)
        } else {
            check = false
        };
        if (!check) {
            this.props.onAddContact(this.state.name, this.state.number);
        }
    };

    render() {
        return ( < >
            <
            form onSubmit = {
                this.handleSubmit
            } >
            <
            label >
            <
            p > Name < /p> <input name = "name"
            type = "text"
            placeholder = "Enter name"
            onChange = {
                this.handleChange
            }
            /> </label > < label >
            <
            p > Number < /p> <input name = "number"
            type = "text"
            placeholder = "Enter number"
            onChange = {
                this.handleChange
            }
            /> </label >
            <
            button type = "submit" > Add contact < /button> </form > < />
        )
    }

}