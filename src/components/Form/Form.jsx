import { Component } from "react"
// import { ContactsList } from "components/ContactsList/ContactsList";

export class Form extends Component {
    state = {
        contacts: [],
        name: '',
    };

    handleSetName = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        })
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.onDataSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({contacts: [], name: ''})
    };

    render() {
        return (
            <>
                <form
                onSubmit={this.handleSubmitForm}
                action="">
                    <label htmlFor="">Name
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleSetName}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                    </label>
                    <button type="submit">Add contact</button>
                </form>
                {/* <ContactsList contactsName={this.state.name} /> */}
            </>
        )
    };
}

//==============================================================
// export const Form = ({ onSubmit, name, onChangeName }) => {
//     return(
//         <form
//             onSubmit={onSubmit}
//             action="">
//                   <label htmlFor="">Name
//                       <input
//                         type="text"
//                         value={name}
//                         onChange={onChangeName}
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                       />
//                   </label>
//                   <button type="submit">Add contact</button>
//               </form>
//     )
// } 
//=============================================================

// import { ContactsList } from "components/ContactsList/ContactsList";
// const { Component } = require("react");

// export class ContactsForm extends Component {

//     state = {
//         contacts: [],
//         name: ''
//     }

//   render() {
//       return (
//           <>
//               <form action="">
//                   <label htmlFor="">Name
//                       <input
//                           type="text"
//                           name="name"
//                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                           required
//                       />
//                   </label>
//                   <button type="button">Add contact</button>
//               </form>
//               <ContactsList/>
//           </>
//     )
//   }
// }