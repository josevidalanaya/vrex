import { createUseStyles } from 'react-jss'
import vrex from "../../../react-app-env";

const sizes: vrex.levels = {
    'h1': 4.2, 'h2': 3.56, 'h3': 2.92, 'h4': 2.28, 'h5': 1.64, 'h6': 1.15
}

const getSizes = (level: vrex.level): number => {
    return sizes[level]
}

const styles = createUseStyles({
    h1: {
        font: { size: `${getSizes('h1')}rem`, weight: 400 },
        lineHeight: '110%',
        margin: [`${getSizes('h1') / 1.5}rem`, 0, `${getSizes('h1') / 2.5}rem`, 0]
    },
    h2: {
        font: { size: `${getSizes('h2')}rem`, weight: 400 },
        lineHeight: '110%',
        margin: [`${getSizes('h2') / 1.5}rem`, 0, `${getSizes('h2') / 2.5}rem`, 0]
    },
    h3: {
        font: { size: `${getSizes('h3')}rem`, weight: 400 },
        lineHeight: '110%',
        margin: [`${getSizes('h3') / 1.5}rem`, 0, `${getSizes('h3') / 2.5}rem`, 0]
    },
    h4: {
        font: { size: `${getSizes('h4')}rem`, weight: 400 },
        lineHeight: '110%',
        margin: [`${getSizes('h4') / 1.5}rem`, 0, `${getSizes('h4') / 2.5}rem`, 0]
    },
    h5: {
        font: { size: `${getSizes('h5')}rem`, weight: 400 },
        lineHeight: '110%',
        margin: [`${getSizes('h5') / 1.5}rem`, 0, `${getSizes('h5') / 2.5}rem`, 0]
    },
    h6: {
        font: { size: `${getSizes('h6')}rem`, weight: 400 },
        lineHeight: '110%',
        margin: [`${getSizes('h6') / 1.5}rem`, 0, `${getSizes('h6') / 2.5}rem`, 0]
    }
})

export default styles