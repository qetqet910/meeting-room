// import { access } from 'fs';
import baseStyled, {
    css,
    CSSProp,
    ThemedStyledInterface,
} from 'styled-components';

const sizes:  { [key: string]: number } = {
    desktop: 768,
}

type BackQuoteArgs = string[];

interface Media {
    desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
    desktop: (...args: BackQuoteArgs) => undefined,
}

Object.keys(sizes).reduce((acc: Media, label: string) => {
    switch (label) {
        case 'desktop':
            acc.desktop = (...args: BackQuoteArgs) =>
                css`
                    @media only screen and (min-width: ${sizes.desktop}px) {
                        ${args}
                    }
                `;
            break;
        default:
            break;
    }
    return acc;
}, media);

const colors = {
    white: '#ffffff',
    black: '#000000',
};

const secondaryColors = {};
const fontSizes: string[] = [];

const theme = {
    colors,
    fontSizes,
    secondaryColors,
    media,
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;