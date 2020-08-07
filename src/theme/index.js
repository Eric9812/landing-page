import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const darkMode = {
  background: colors.darkOpacity,
  text: colors.grey,
  input: colors.black,
  options: colors.blackOpacity,
  borderInput: colors.borderOptionDark,
  borderOption: colors.borderOptionDark,
};

export const lightMode = {
  background: colors.transparent,
  text: colors.darkGray,
  input: colors.whiteOpacity,
  options: colors.white,
  borderInput: colors.borderInputLight,
  borderOption: colors.borderOptionLight,
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto';
    }
    html, body{
        margin: 0;
        padding: 0;
    }
    :focus {
        outline: 0;
    }    
    a, :active,a:hover {
        outline: 0;
        text-decoration: none;
    }
    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    button, input {
        border: 0;
        padding: 0
    }

    button, a {
        cursor: pointer;
    }
`;
export { default as breakpoints } from "./breakpoints";
export { colors };
export { fontSize, fontWeight, lineHeight } from "./fonts";
export { default as spacings } from "./spacings";
