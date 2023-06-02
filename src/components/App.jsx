import { Component } from "react";
import { Form } from "./Form/Form";
// import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  
  formDataGetter = (data) => {
    console.log(data);
    // return data;
  }

  renderContacts = (data) => {
    console.log(data);

  }

  render() {
      return (
        <>
          <Form onDataSubmit={this.formDataGetter}/>
          {/* <ContactsList name={this.data} /> */}
        </>
    )
  }
}
// item={this.data.name}

//===========================================
// import { ContactsForm } from "./Form/Form";

// export const App = () => {
//   return (
//     <ContactsForm/>
//   );
// };
//===========================================