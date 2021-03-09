import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }
    body {
        font-family: "Inter", sans-serif;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-size: 100%;
    }

    h1{
        color: ${({ theme }) => theme.textTitle};
        font-size: 1.7em;
        margin-bottom: 1%;
        font-weight: 600;
    }

    p{
        font-size: 1em;
        font-weight: 400;
    }
  `;


