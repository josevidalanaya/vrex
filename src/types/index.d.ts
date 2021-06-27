import { ReactNode } from 'react'

declare namespace vrex {

    type level = 1 | 2 | 3 | 4 | 5 | 6

    type hLevel = `h${level}`

    type CustomProps = {
        children?: ReactNode
    }

    type TitleProps = CustomProps & {
        level?: hLevel
    }

    type Size = {
        [key in hLevel]: number
    }

    type CustomTheme = {
        size: Size
    }

    type TitleName = 'Title'

    export type { hLevel, TitleProps, CustomTheme, TitleName }
}

export default vrex