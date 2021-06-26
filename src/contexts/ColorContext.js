import { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorContextProvider = (props) => {   

    const [colors, setColors] = useState(
        {
            "blue": "#007fff",
            "grey": "#b2beb5",
            "black": "black"
        }
    );

    return (
        <ColorContext.Provider value={{ colors }}>
            { props.children }
        </ColorContext.Provider>
    )
}

export default ColorContextProvider;