import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from '../libs/theme'
import favicon from './favicon.ico'


export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <link rel="shortcut icon" href={favicon}/>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}