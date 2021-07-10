import React, { createContext, Component } from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = { 
        isHuTrue: true,
		hu: {
            navbar: ["Kezdőlap", "Szolgáltatásaink", "Rólunk", "Ajánlatkérés", "Kapcsolat"],
			dropdown: ["Nemzetközi Szállítmányozás", "Raktározás", "Belföldi díjtábla", "Tengeri szállítmányozás", "Légi szállítmányozás"],
            about: {
                title: "Rólunk",
                text: ["A Lentka LT Hungary Kft. egy 100%-osan magyar tulajdonban levő cég, Zala megyei székhellyel.",
                    "Cégünk fő profilja a:",
                    "Tengeri, vasúti és légi szállítmányozás",
                    "Több évtizedes tapasztalattal a hátunk mögött kínálunk ügyfeleink számára személyre szabott megoldásokat, figyelembe véve minden lehetséges szállítási módot és útvonalat.",
                    "Széles körű kapcsolati rendszerrel rendelkezünk Európa, illetve a közel- és a távolkelet tengeri kikötőiben és repterein egyaránt."
                ]
            },
            contact: {
                title: "Kapcsolat",
                text: ["Címünk:  8868 Letenye, Deák Ferenc u. 38.",
                    "Tel: +36 30 252 6212", 
                    "E-mail: info@lthungary.com",
                    "Adószám: 29310810-2-20.",
                    "Közösségi adószám: HU29310810",
                    "Cégjegyzékszám: 20-09-077700"
                ]
            },
            offer: {
                title: "Ajánlatkérés",
                text: [ "Vezetéknév",
                    "Keresztnév",
                    "Cégnév",
                    "Telefonszám",
                    "Email cím",
                    "Üzenet",
                    "Szolgáltatás kiválasztása",
                    "Küldés",
                    "Ajánlat elküldve!",
                    "Valami hiba történt, kérjük probálja meg újra!"
                ]
            },
            sea: {
                title: "Tengeri Szállítmányozás",
                text: ["A tengeri szállítmányozás óriási árutömeg mozgatására képes, kedvező szállítási költségek mellett. Általában 1- 2 hónapos szállítási idővel kell számolnunk.",
                "Abban az esetben ajánljuk ügyfeleinknek, ha szállítmányuk kézbesítése hosszabb tranzitidővel is megoldható. "]
            }

		},
		en: {
            navbar: ["Mainpage", "Services", "About", "Offer", "Contact"],
			dropdown: ["International Shipping", "Storage", "Domestic tariff table", "Sea Shipping", "Air shipping"],
            about: {
                title: "About Us",
                text: ["A Lentka LT Hungary Kft. egy 100%-osan magyar tulajdonban levő cég, Zala megyei székhellyel.",
                    "Our company main profile is:",
                    "Tengeri, vasúti és légi szállítmányozás",
                    "Több évtizedes tapasztalattal a hátunk mögött kínálunk ügyfeleink számára személyre szabott megoldásokat, figyelembe véve minden lehetséges szállítási módot és útvonalat.",
                    "Széles körű kapcsolati rendszerrel rendelkezünk Európa, illetve a közel- és a távolkelet tengeri kikötőiben és repterein egyaránt."
                ]
            },
            contact: {
                title: 'Contact',
                text: ["Lentka LT Hungary Kft.",
                    "Tel: +36 30 252 6212", 
                    "E-mail: info@lthungary.com"
                ]
            },
            offer: {
                title: "Offer",
                text: [ "Last name",
                    "First name",
                    "Company",
                    "Telephone number",
                    "Email",
                    "Message",
                    "Choose a service below",
                    "Submit",
                    "Offer has been sent!",
                    "Something went wrong, please try again!"
                ]
            }
		}
    }

    changeLanguage = (bool) => { this.setState({ isHuTrue: bool }); }

    render() { 
        return ( 
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage }}>
                { this.props.children }
            </LanguageContext.Provider>
        );
    }
}
 
export default LanguageContextProvider;