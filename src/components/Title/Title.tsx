import { useTheme } from 'react-jss'
import vrex from '@types'
import { titleStyles } from '@styles'

const defaultProps: vrex.TitleProps = { level: 'h1' }

const Title = (props: vrex.TitleProps) => {
    const theme = useTheme<vrex.CustomTheme>()
    const { level, children } = { ...defaultProps, ...props }
    const classes = titleStyles({ ...{ level }, theme })
    const HTag = level as keyof JSX.IntrinsicElements
    return <HTag className={classes.Title}>{children}</HTag>
}

export default Title