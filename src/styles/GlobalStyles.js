import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
}

*, button, input {
    border: 0;
    background: none;
    font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
}

html {
    background: var(--primary);
    background: linear-gradient(0deg, var(--secondary) 0%, var(--primary) 100%); 
}

:root {
    --primary: #FF7F00;
    --secondary: #FFBA00;
    --white: #FFF2E4;
    --black: #222222;
    --gray: #505050;
}
`;
