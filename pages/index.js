import { Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import NextLink from "next/link"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from "../components/bio"
import { TechStackSection, TechStackIcon, TechStackText } from "../components/teckstack"
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { TbBrandThreejs } from 'react-icons/tb'
import { IoLogoGithub, IoLogoDiscord, IoLogoInstagram } from 'react-icons/io5'
import { OwlCarousel, Responsive } from '../components/slider'
import Fonts from "../components/fonts"
import {
    Link,
    SimpleGrid,
    List,
    ListItem,
    chakra
} from '@chakra-ui/react'


const Page = () => {
    return (

        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a junior full-stack mobile developer!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" >
                        Emin Atalay
                    </Heading>
                    <p>I'm a developer who is passionate about JavaScript and JavaScript FrameWorks.</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center" >
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="images/contents/vesika.jpg" />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Me
                </Heading>
                <Paragraph> I am making progress individually with my research and work in this field. The purpose of my work is to maintain simplicity, stay up-to-date, and focus on problem-solving. The new technology of today continues to advance, and it is crucial to keep up with it, which is why I always strive to stay current in my work. While I understand the importance of systematic and analytical work in team collaborations, I also believe that I am adaptable and possess the necessary discipline to contribute effectively to team projects. I am well-versed in JavaScript frameworks. I strongly believe that JavaScript has tremendous potential and a promising future. Currently, I am actively involved in developing full-stack mobile applications using React Native, JavaScript, Node.js, TypeScript, MongoDB, and the Express framework. </Paragraph>
                <Box align="center" my={4} >
                    <NextLink href="/">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
                            My Blog/Posts
                            Coming Soon...
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2} >
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Istanbul, Turkey.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Graduated from Istanbul University-Cerrahpasa with a degree in Computer Programming.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Started working as a Quality Assurance Specialist at <Link href="https://www.nyctophilestudios.com/" target="_blank" >Nyctophile Studios</Link>
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Started working as a Front-end Developer at{" "}
                    <Link href="https://www.acekaholding.com.tr/" target="_blank">
                        Aceka Holding A.Ş
                    </Link>
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Tech Stack
                </Heading>
                <OwlCarousel responsive={Responsive} loop="true" autoplay={true} autoplayTimeout={3000} >
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <p>React.js</p>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4>Next.js</h4>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4 style={{ marginRight: 75 }} >Three.js</h4>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4>React Native</h4>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4>Node.js</h4>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4>ChakraUI</h4>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"

                    }} >
                        <Image src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4>Express.js</h4>
                    </div>
                    <div className="item" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <Image src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" style={{ aspectRatio: 1, borderRadius: 12 }} />
                        <h4>MongoDB</h4>
                    </div>
                </OwlCarousel>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I like
                </Heading>
                <Paragraph>
                    Comic Book, Digital Art,{' '}
                    <Link href="https://open.spotify.com/playlist/6Bp1Oal0qHtVitA2TDqOiH?si=3eeea1779c214047" target="_blank" title="My favourite phonk playlist">
                        Phonk
                    </Link>
                    , Deep Learning and AI,{' '}
                    <Link href="https://letterboxd.com/atalayio/" target="_blank" title="My letterbox profile">
                        Movie
                    </Link>
                    <Link href="https://myanimelist.net/profile/atalayio" target="_blank" title="My myanimelist profile">
                        , Anime
                    </Link>
                    , and also Stardew Valley LOL
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    My Accounts
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/atalayio" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @atalayio
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://discordapp.com/users/851419159421779988/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoDiscord />}
                            >
                                @atalayio
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://instagram.com/atalayio" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @atalayio
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>

    )
}



export default Page