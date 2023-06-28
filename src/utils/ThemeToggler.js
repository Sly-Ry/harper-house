import { useState } from "react";

export default function ThemeToggler() {
    let [darkThemeOn, setDarkThemeOn] = useState(false);
    const darkTheme = <h1>Dark Theme</h1>
    const lightTheme = <h1>Light Theme</h1>

    function handleClick() {
        if (darkThemeOn === true){
            setDarkThemeOn(false);
            console.log("Light theme is on");
        }
        else {
            setDarkThemeOn(true);
            console.log("Dark theme is on")
        }
    }

    return (
        <div data-testid="themeToggle">
            {darkThemeOn ? darkTheme : lightTheme}
            <button type="button" onClick={handleClick} data-testid="toggle-theme-btn"w>
                Change Theme
            </button>
        </div>
    )
}