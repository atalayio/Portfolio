import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from '../libs/theme'


export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

