import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    img {
        display: block;
        max-width: 100%;
        object-fit: cover;
    }
    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
    }
    p {
        margin: 0;
    }
    h1, h2 {
        margin: 0;
    }
`;
