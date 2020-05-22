/// <reference types="react-scripts" />
/// <reference types="react-jss"/>
import { ReactNode } from 'react'
import { DefaultTheme } from 'react-jss'

declare namespace vrex {
    type level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    interface CustomProps {
        children?: ReactNode,
    }
    interface TitleProps extends CustomProps {
        level?: level
    }
    interface levels {
        [level: string]: number
    }

    interface customTheme extends DefaultTheme { 
        level:level
    }
}

export default vrex