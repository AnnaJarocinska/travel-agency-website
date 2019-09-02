import React, {Component} from 'react';
import '../styles/contactForm.css';

class ContactForm extends Component{
    
        state = { 
            name: "Imię",
            surname: "Nazwisko",
            email: "Adres email",
            phoneNumber: "111111111",
            textarea: "Wpisz wiadomość",

         errors : { 
            name: true,
            surname: true,
            email: true,
            phoneNumber: true,
            textarea: true,
         }
        }

         statements = {
            nameIncorrect: "Niepoprawne imię",
            surnameIncorrect: "Niepoprawne nazwisko",
            emailIncorrect: "Niepoprawny adres email",
            phoneNumberIncorrect: "Niepoprawny numer telefonu",
            textareaIncorrect: "Niepoprawna treść wiadomości",
         }

    handleInputChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() { 
        return (
            <form className="contactForm">
                <label>
                    Imię
                    <input name="name" type="text" onChange={this.handleInputChange} value={this.state.name}></input>
                </label>
                {this.state.errors.name && <span className="contactForm__incorrect">{this.statements.nameIncorrect}</span>}
                <label>
                    Nazwisko
                    <input name="surname" type="text" onChange={this.handleInputChange} value={this.state.surname}></input>
                </label>
                {this.state.errors.surname && <span className="contactForm__incorrect">{this.statements.surnameIncorrect}</span>}
                <label>
                    Adres email
                    <input name="email" type="text" onChange={this.handleInputChange} value={this.state.email}></input>
                </label>
                {this.state.errors.email && <span className="contactForm__incorrect">{this.statements.emailIncorrect}</span>}
                <label>
                    Numer telefonu
                    <input name="phoneNumber" type="number" onChange={this.handleInputChange} value={this.state.phoneNumber}></input>
                </label>
                {this.state.errors.phoneNumber && <span className="contactForm__incorrect">{this.statements.phoneNumberIncorrect}</span>}
                <label>
                    Wpisz wiadomość
                    <textarea name="textarea" type="text" onChange={this.handleInputChange} value={this.state.textarea}></textarea>
                </label>
                {this.state.errors.textarea && <span className="contactForm__incorrect">{this.statements.textareaIncorrect}</span>}
                <input type="submit" value="Wyślij" />
            </form>
         );
    }
}
export default ContactForm;
