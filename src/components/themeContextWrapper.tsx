import {  SetStateAction, useEffect, useState } from "react";
import { ThemeContext, themes } from "../utils/themes";

let ThemeContextWrapper = (props:any) => {
    const [theme, setTheme] = useState(themes.light);
    
    let changeTheme= (theme: SetStateAction<string>) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('light');
                document.body.classList.remove('dark');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('light');
                document.body.classList.add('dark');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextWrapper;