import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section"
import { WorkGridItem } from "../components/layouts/grid-item";
import white from '../public/images/contents/white.png'
import { useState, useEffect } from "react";

const Works = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, []);
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}> 
            Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                {domLoaded && (
                    <WorkGridItem id="subject 1" title="subject 1" thumbnail={white}>
                        This is subject text here.
                    </WorkGridItem>
                )}
                </Section>
            </SimpleGrid>
        </Container>
    )

}

export default Works
