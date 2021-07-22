import React, { createContext, Component } from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = { 
        isHuTrue: true,
		hu: {
            navbar: ["Kezdőlap", "Szolgáltatásaink", "Rólunk", "Ajánlatkérés", "Kapcsolat"],
            navbarUrl: ["/mainpage", "/services", "/about-us", "/offer", "/contact"],
			dropdown: ["Tengeri Szállítmányozás", "Közúti szállítmányozás", "Vasúti szállítmányozás Kínából", "Légi szállítmányozás"],
            dropdownUrl: ["/services/sea-shipping", "/services/vehicular-transport", "/services/train-transport-from-china", "/services/air-transport"], 
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
                    text: ["A tengeri szállítmányozás óriási árutömeg mozgatására képes, kedvező szállítási költségek mellett.", " Általában 1-2 hónapos szállítási idővel kell számolnunk.",
                            "Abban az esetben ajánljuk ügyfeleinknek, ha szállítmányuk kézbesítése hosszabb tranzitidővel is megoldható.", " Cégünk vállalja komplett- és gyűjtőkonténeres import-export szállítások megszervezését.", " Megbízóink két szolgáltatás között tudnak választani.", " Teljes konténer (FCL – Full Container Load) Gyűjtő szállítmány (LCL – Less than Container Load)"]
                },
                {
                    title: "Közúti szállítmányozás",
                    text: ["Megbízónk igényei szerint, komplett rakományok (FTL), illetve rész- és gyűjtőrakományok (LTL) fuvarszervezésével is foglalkozunk belföldön és Európán belül egyaránt.", "Közúti szállítmányokat rövid tranzitidővel juttatjuk el a megbízóinkhoz."]
                },
                {
                    title: "Vasúti szállítmányozás Kínából",
                    text: ["Az egyik legmegbízhatóbb, a nagy távolság miatt kedvező ár-érték arányú szállítási forma.", " Vállalunk vasúti gyűjtő és teljes konténeres szállításokat Kínából direkt vonalon Budapestre.", "A vasúti szállítás fajlagos fuvarköltsége a légi és a tengeri szállítási díjak között alakul, ahogy a szállítási időtartam is kb. 20-24 nap.", " Azoknak ajánljuk ezt a szállítási formát, akiknek a tengeri szállítási idő túl hosszú, viszont a légi szállítási díjszint túl magas."]
                },
                {
                    title: "Légi szállítmányozás",
                    text: ["A légi szállítmányozást abban az esetben optimálisabb választás, ha a termék időérzékeny, tehát minél hamarabb el szeretnénk juttatni a szállítmányt a megrendelőhöz.", " Amellett, hogy gyors és biztonságos, az ügyfelek jobban tudnak gazdálkodni a raktárkészletükkel.", " Hátránya a többi szállítmányozási módhoz képest, hogy viszonylag magasabb költségekkel kell kalkulálni."]
                }
            ],
            footer: [
                {
                    title: "Szolgáltatások"
                },
                {
                    title: "Információk",
                    text: ["Ajánlatkérés", "Rólunk", "Kapcsolat"]
                }
            ]

		},
		en: {
            navbar: ["Mainpage", "Services", "About", "Offer", "Contact"],
            navbarUrl: ["/mainpage", "/services", "/about-us", "/offer", "/contact"],
			dropdown: ["Sea Shipping", "Vehicular transport", "Train transport from China", "Air transport"],
            dropdownUrl: ["/services/sea-shipping", "/services/vehicular-transport", "/services/train-transport-from-china", "/services/air-transport"], 
            about: {
                title: "About Us",
                text: ["The Lentka LT Hungary Kft. is a 100% Hungarian-owned company headquartered in Zala County.",
                    "The main profile of our company are:",
                    "Sea, rail and air transport",
                    "With decades of experience behind us, we offer customized solutions to our customers, considering all possible modes and routes of delivery.",
                    "We have an extensive network of contacts in seaports and airports in Europe, the Middle East and the Far East."
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
                    title: "Sea Shipping",
                    text: ["Sea transport is capable of moving huge quantities of products at favorable transportation costs.",
                        " We usually have a delivery time of 1-2 months.",
                        " We recommend it to our customers in case of the delivery can be arranged with a longer transit time.",
                        " Our company undertakes the organization of import and export deliveries in Full Load and Less Than containers load.",
                        " Our clients can choose between two services.",
                        " Full container (FCL – Full Container Load) Less than container (LCL – Less than Container Load)"
                    ]
                },
                {
                    title: "Vehicular transport",
                    text: ["According to the needs of our client, we also deal with Full Truck Load (FTL) and Less Than Truckload shipping (LTL) in domestically and within Europe.", 
                        "We deliver road shipments to our clients with a short transit time."
                    ]
                },
                {
                    title: "Train transport from China",
                    text: ["It is one of the most reliable forms of transport with a good value for money due to the long distance.",
                        " We undertake rail Full Container Load and Less than Container Load deliveries from China on a direct line to Budapest.", 
                        " The specific freight cost of rail transport varies between air and sea transport charges, as does the transport time of approx. 20-24 days.", 
                        " We recommend this form of transportation for those whose sea transportation time is too long, but the air transportation fee level is too high."
                    ]
                },
                {
                    title: "Air transport",
                    text: ["Air freight is a more optimal choice if the product is time sensitive, so we want to deliver the shipment to the customer as soon as possible.",
                        " In addition to being fast and secure, customers can manage their inventory much better.", 
                        " The disadvantage compared to other modes of transport is that it has to be calculated with relatively higher costs."
                    ]
                }
            ],
            footer: [
                {
                    title: "Services"
                },
                {
                    title: "Informations",
                    text: ["Offer", "About us", "Contact"]
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