import React, { useState } from 'react';

function ContactForm() {
    const [form, setForm] = useState(
        {imie: "", email:"",  wiadomosc: ""}
    );

    const handleInputChange = (e) =>{
        const {id, value} = e.target;
        setForm({...form, [id]:value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
    };
    return(
        <div>
        <h1>ZADANIE 3</h1>
        <h4>Stwórz komponent React o nazwie ContactForm, który zawiera formularz z polami na imię, email i wiadomość. Po złożeniu formularza, wyświetl te dane w konsoli.</h4>
        <h2>Formularz kontaktowy</h2>
        <form>
            <input type="text" value={form.imie} id="imie" placeholder="Wprowadź imię" onChange={handleInputChange}/><br/>
            <input type="text" value={form.email} id="email" placeholder="Wprowadź email" onChange={handleInputChange}/><br/>
            <input type="text" value={form.wiadomosc} id="wiadomosc" placeholder="Wprowadź swoją wiadomość" onChange={handleInputChange}/><br/>
            <button onClick={handleSubmit}>Wyślij</button>
        </form>
        </div>
    );
}
export default ContactForm;