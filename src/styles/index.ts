import vrex from '@types'
import { createUseStyles } from 'react-jss'

const titleStyles = createUseStyles<vrex.TitleName, vrex.TitleProps, vrex.CustomTheme>({
    'Title': ({ theme, ...props }) => ({
        fontSize: props.level ? `${theme.size[props.level]}` : `${theme.size['h1']}`,
        fontWeight: 400,
        lineHeight: '110%',
        margin: props.level ? [`${theme.size[props.level] / 1.5}rem`, 0, `${theme.size[props.level] / 2.5}rem`, 0] : [`${theme.size['h1'] / 1.5}rem`, 0, `${theme.size['h1'] / 2.5}rem`, 0]
    })
})

export { titleStyles }