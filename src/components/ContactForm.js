import React, { Component } from 'react';
import '../styles/contactForm.css';

class ContactForm extends Component {

    state = {
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        textarea: "",
        message: "",

        errors: {
            name: false,
            surname: false,
            email: false,
            phoneNumber: false,
            textarea: false,
        }
    }

    statements = {
        nameIncorrect: "Niepoprawne imię",
        surnameIncorrect: "Niepoprawne nazwisko",
        emailIncorrect: "Niepoprawny adres email",
        phoneNumberIncorrect: "Niepoprawny numer telefonu",
        textareaIncorrect: "Niepoprawna treść wiadomości",
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;


        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const validation = this.formValidation()
        console.log(validation);
        if (validation.formCorrect) {
            this.setState({
                name: "",
                surname: "",
                email: "",
                phoneNumber: "",
                textarea: "",
                message: "Wiadomość została wysłana",

                errors: {
                    name: false,
                    surname: false,
                    email: false,
                    phoneNumber: false,
                    textarea: false,

                }
            }
            )
        }
        else {
            this.setState({
                errors: {
                    name: !validation.name,
                    surname: !validation.surname,
                    email: !validation.email,
                    phoneNumber: !validation.phoneNumber,
                    textarea: !validation.textarea,
                }
            })
        }
    }
    formValidation() {
        let name = false;
        let surname = false;
        let email = false;
        let phoneNumber = false;
        let textarea = false;
        let formCorrect = false;

        const mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/i
        const phoneNumberReg = /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/


        if (this.state.name.length >= 2 && this.state.name.indexOf(' ') === -1) {
            name = true;
        }

        if (this.state.surname.length >= 2 && this.state.surname.indexOf(' ') === -1) {
            surname = true;
        }

        if (mailReg.test(this.state.email)) {
            email = true;
        }

        if (phoneNumberReg.test(this.state.phoneNumber)) {
            phoneNumber = true;
        }

        if (this.state.textarea.length > 10) {
            textarea = true;
        }

        if (name && surname && email && phoneNumber && textarea) {
            formCorrect = true;
        }

        return ({
            name,
            surname,
            email,
            phoneNumber,
            textarea,
            formCorrect
        })
    }

    componentDidUpdate() {
        if (this.state.message !== '') {
            setTimeout(() => this.setState({
                message: ''
            }), 5000)
        }
    }

    render() {
        return (
            <>
                <p className="contactForm--title">Formularz kontaktowy</p>
                <form className="contactForm" onSubmit={this.handleSubmit} noValidate>
                    <label className="contactForm__label" htmlFor="name">
                        Imię
                    <input className="contactForm__input" name="name" type="text" onChange={this.handleInputChange} value={this.state.name}></input>
                    </label>
                    {this.state.errors.name && <span className="contactForm__incorrect">{this.statements.nameIncorrect}</span>}
                    <label className="contactForm__label" htmlFor="surname">
                        Nazwisko
                    <input className="contactForm__input" name="surname" type="text" onChange={this.handleInputChange} value={this.state.surname}></input>
                    </label>
                    {this.state.errors.surname && <span className="contactForm__incorrect">{this.statements.surnameIncorrect}</span>}
                    <label className="contactForm__label" htmlFor="email">
                        Adres email
                    <input className="contactForm__input" name="email" type="text" onChange={this.handleInputChange} value={this.state.email}></input>
                    </label>
                    {this.state.errors.email && <span className="contactForm__incorrect">{this.statements.emailIncorrect}</span>}
                    <label className="contactForm__label" htmlFor="phone number">
                        Numer telefonu
                    <input className="contactForm__input" name="phoneNumber" type="number" onChange={this.handleInputChange} value={this.state.phoneNumber}></input>
                    </label>
                    {this.state.errors.phoneNumber && <span className="contactForm__incorrect">{this.statements.phoneNumberIncorrect}</span>}
                    <label className="contactForm__label" htmlFor="message">
                        Wpisz wiadomość
                    <textarea className="contactForm__textarea" name="textarea" type="text" onChange={this.handleInputChange} value={this.state.textarea} cols="45" rows="7"></textarea>
                    </label>
                    {this.state.errors.textarea && <span className="contactForm__incorrect">{this.statements.textareaIncorrect}</span>}
                    <button className="contactForm__button">Wyślij</button>
                </form>
                {this.state.message && <div className="contactForm__formSent"><p>{this.state.message}</p></div>}
            </>
        );
    }
}
export default ContactForm;
