import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto.ttf');
    }
    @font-face {
        font-family: 'Roboto-Thin';
        src: url('fonts/Robotothin.ttf');
    }
    @font-face {
        font-family: 'Roboto-Medium';
        src: url('fonts/Robotomedium.ttf');
    }
    @font-face {
        font-family: 'Roboto-Bold';
        src: url('fonts/Robotobold.ttf');
    }
    @font-face {
        font-family: 'Font-Awesome';
        src: url('fonts/fa-solid-900.ttf');
    }
    body {
        margin: 0px;
        cursor: default;
    }
`;

export default GlobalStyle;