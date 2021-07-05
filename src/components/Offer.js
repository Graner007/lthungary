import Space from "./Space";
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import emailjs from 'emailjs-com';

const Offer = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;

    const sendEmail = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("name", "Anna");

        emailjs.send("service_brluc4n", "template_egyjlm8", data, "user_TSozZYrqHfgeliZhvC5jr")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="offer">
            <h1>{language.offer.title}</h1>
            <Space padding="30px" />
            <form onSubmit={sendEmail}>
                <label htmlFor={language.offer.text[0]}><b>{language.offer.text[0]}</b></label><br />
                <input type="text" id={language.offer.text[0]} placeholder="Minta" />
                <label htmlFor={language.offer.text[1]}><b>{language.offer.text[1]}</b></label><br />
                <input type="text" id={language.offer.text[1]} placeholder="László" />
                <label htmlFor={language.offer.text[2]}><b>{language.offer.text[2]}</b></label><br />
                <input type="text" id={language.offer.text[2]} placeholder="Minta Kft." />
                <label htmlFor={language.offer.text[3]}><b>{language.offer.text[3]}</b></label><br />
                <input type="tel" id={language.offer.text[3]} placeholder="+ 36 30 333 3333" />
                <label htmlFor={language.offer.text[4]}><b>{language.offer.text[4]}</b></label><br />
                <input type="email" id="email" placeholder="minta@gmail.com" />
                <label htmlFor={language.offer.text[5]}><b>{language.offer.text[5]}</b></label><br />
                <textarea id={language.offer.text[5]} cols="30" rows="10"></textarea>
                <label htmlFor={language.offer.text[6]}><b>{language.offer.text[6]}</b></label><br />
                <select name={language.offer.text[6]} id={language.offer.text[6]}>
                    {language.dropdown.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Offer;