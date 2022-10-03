import { createGlobalStyle } from "styled-components";
import "@fontsource/sora";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: "Sora", sans-serif;    
    }

    html {
        font-size: 62.5%;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
