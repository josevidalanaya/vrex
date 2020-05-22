import React from 'react'
import vrex from '../../../react-app-env'
import styles from './style'

const defaultProps: vrex.TitleProps = { level: 'h1' }

const Title = (props: vrex.TitleProps) => {
    const classes = styles()
    const { level, children } = { ...defaultProps, ...props }
    const HTag = level as keyof JSX.IntrinsicElements
    if (level)
        return <HTag className={classes[level]}>{children}</HTag>
    return <HTag className={classes['h1']}>{children}</HTag>

}

export default Title