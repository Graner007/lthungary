import Space from "./Space";
import { useContext, useState } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import emailjs from 'emailjs-com';

const Offer = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_brluc4n", "template_egyjlm8", e.target, "user_TSozZYrqHfgeliZhvC5jr")
            .then(res => {
                if (res.text === "OK") {
                    setSuccess(true);
                    setError(false);
                } 
            })
            .catch(err => {
                setError(true);
                setSuccess(false);
            });
    }

    return (
        <div className="offer">
            <h1>{language.offer.title}</h1>
            
            {success ? <div style={{marginTop: 30, marginBottom: "-20px"}} className="alert alert-success" role="alert">{language.offer.text[8]}</div> : null}

            {error ? <div style={{marginTop: 30, marginBottom: "-20px"}} className="alert alert-danger" role="alert">{language.offer.text[9]}</div> : null}

            <Space padding="30px" />
            <form className="row g-3" onSubmit={sendEmail} >
                <div className="col-md-4">
                    <label htmlFor="lastname" className="form-label">{language.offer.text[0]}</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Minta" name="lastname" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="firstname" className="form-label">{language.offer.text[1]}</label>
                    <input type="text" className="form-control" id="firstname" placeholder="László" name="firstname" required />
                </div>
                <div className="col-4">
                    <label htmlFor="company" className="form-label">{language.offer.text[2]}</label>
                    <input type="text" name="company" className="form-control" id="company" placeholder="Minta Kft." required />
                </div>
                <div className="col-6">
                    <label htmlFor="tel" className="form-label">{language.offer.text[3]}</label>
                    <input type="tel" name="tel" className="form-control" id="tel" placeholder="+36 30 333 3333" required />
                </div>
                <div className="col-6">
                    <label htmlFor="email" className="form-label">{language.offer.text[4]}</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="minta@gmail.com" required />
                </div>
                <div className="form-floating">
                    <textarea className="form-control" name="message" placeholder="Leave a comment here" id="message" style={{height: 100}}></textarea>
                    <label htmlFor="message">{language.offer.text[5]}</label>
                </div>
                <div className="col-md-4">
                    <label htmlFor="serivice" className="form-label">{language.offer.text[6]}</label>
                    <select id="serivice" name="service" className="form-select">
                        {language.dropdown.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="col-12" style={{paddingTop: "2%"}}>
                    <button type="submit" className="btn btn-primary">{language.offer.text[7]}</button>
                </div>
            </form>
        </div>
        
    )
}

export default Offer;