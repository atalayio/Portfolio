import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import FootprintIcon from '../public/images/contents/footprint';
import { color } from 'framer-motion';


const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

> svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`


const Logo = () => {
    const colorMode = useColorModeValue('', '-dark');
    return (
        <Link href="/">
            
                <LogoBox>
                    <FootprintIcon width={20} height={20} style={{color: {colorMode}}} />
                <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c'
                fontWeight="bold"
                ml={3}>
                    Emin Atalay
                </Text>
                </LogoBox>
            
        </Link>

    )
}

export default Logo