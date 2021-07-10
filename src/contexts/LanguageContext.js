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
            service: [
                {
                    title: "Tengeri Szállítmányozás",
                    text: ["A tengeri szállítmányozás óriási árutömeg mozgatására képes, kedvező szállítási költségek mellett. Általában 1- 2 hónapos szállítási idővel kell számolnunk.",
                    "Abban az esetben ajánljuk ügyfeleinknek, ha szállítmányuk kézbesítése hosszabb tranzitidővel is megoldható. Cégünk vállalja komplett- és gyűjtőkonténeres import-export szállítások megszervezését. Megbízóink két szolgáltatás között tudnak választani. Teljes konténer (FCL – Full Container Load) Gyűjtő szállítmány (LCL – Less than Container Load)"]
                },
                {
                    title: "Közúti szállítmányozás",
                    text: ["Megbízónk igényei szerint, komplett rakományok (FTL), illetve rész- és gyűjtőrakományok (LTL) fuvarszervezésével is foglalkozunk belföldön és Európán belül egyaránt. Közúti szállítmányokat rövid tranzitidővel juttatjuk el a megbízóinkhoz."]
                },
                {
                    title: "Vasúti szállítmányozás Kínából",
                    text: ["Az egyik legmegbízhatóbb, a nagy távolság miatt kedvező ár-érték arányú szállítási forma. Vállalunk vasúti gyűjtő és teljes konténeres szállításokat Kínából direkt vonalon Budapestre. A vasúti szállítás fajlagos fuvarköltsége a légi és a tengeri szállítási díjak között alakul, ahogy a szállítási időtartam is kb. 20-24 nap. Azoknak ajánljuk ezt a szállítási formát, akiknek a tengeri szállítási idő túl hosszú, viszont a légi szállítási díjszint túl magas."]
                },
                {
                    title: "Légi szállítmányozás",
                    text: ["A légi szállítmányozást abban az esetben optimálisabb választás, ha a termék időérzékeny, tehát minél hamarabb el szeretnénk juttatni a szállítmányt a megrendelőhöz. Amellett, hogy gyors és biztonságos, az ügyfelek jobban tudnak gazdálkodni a raktárkészletükkel. Hátránya a többi szállítmányozási módhoz képest, hogy viszonylag magasabb költségekkel kell kalkulálni."]
                }
            ],
            footer: [
                {
                    title: "Szolgáltatások",
                    text: ["Tengeri Szállítmányozás", "Közúti szállítmányozás", "Vasúti szállítmányozás Kínából", "Légi szállítmányozás"]
                },
                {
                    title: "Információk",
                    text: ["Ajánlatkérés", "Rólunk", "Kapcsolat"]
                }
            ]

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
                    "E-mail: info@lthungary.com",
                    "Tax number: 29310810-2-20.",
                    "Public tax ID number: HU29310810",
                    "Company registration number: 20-09-077700"
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
            },
            service: [
                {
                    title: "Tengeri Szállítmányozás",
                    text: ["A tengeri szállítmányozás óriási árutömeg mozgatására képes, kedvező szállítási költségek mellett. Általában 1- 2 hónapos szállítási idővel kell számolnunk.",
                    "Abban az esetben ajánljuk ügyfeleinknek, ha szállítmányuk kézbesítése hosszabb tranzitidővel is megoldható. Cégünk vállalja komplett- és gyűjtőkonténeres import-export szállítások megszervezését. Megbízóink két szolgáltatás között tudnak választani. Teljes konténer (FCL – Full Container Load) Gyűjtő szállítmány (LCL – Less than Container Load)"]
                },
                {
                    title: "Közúti szállítmányozás",
                    text: ["Megbízónk igényei szerint, komplett rakományok (FTL), illetve rész- és gyűjtőrakományok (LTL) fuvarszervezésével is foglalkozunk belföldön és Európán belül egyaránt. Közúti szállítmányokat rövid tranzitidővel juttatjuk el a megbízóinkhoz."]
                },
                {
                    title: "Vasúti szállítmányozás Kínából",
                    text: ["Az egyik legmegbízhatóbb, a nagy távolság miatt kedvező ár-érték arányú szállítási forma. Vállalunk vasúti gyűjtő és teljes konténeres szállításokat Kínából direkt vonalon Budapestre. A vasúti szállítás fajlagos fuvarköltsége a légi és a tengeri szállítási díjak között alakul, ahogy a szállítási időtartam is kb. 20-24 nap. Azoknak ajánljuk ezt a szállítási formát, akiknek a tengeri szállítási idő túl hosszú, viszont a légi szállítási díjszint túl magas."]
                },
                {
                    title: "Légi szállítmányozás",
                    text: ["A légi szállítmányozást abban az esetben optimálisabb választás, ha a termék időérzékeny, tehát minél hamarabb el szeretnénk juttatni a szállítmányt a megrendelőhöz. Amellett, hogy gyors és biztonságos, az ügyfelek jobban tudnak gazdálkodni a raktárkészletükkel. Hátránya a többi szállítmányozási módhoz képest, hogy viszonylag magasabb költségekkel kell kalkulálni."]
                }
            ],
            footer: [
                {
                    title: "Szolgáltatások",
                    text: ["Tengeri Szállítmányozás", "Közúti szállítmányozás", "Vasúti szállítmányozás Kínából", "Légi szállítmányozás"]
                },
                {
                    title: "Információk",
                    text: ["Ajánlatkérés", "Rólunk", "Kapcsolat"]
                }
            ]
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