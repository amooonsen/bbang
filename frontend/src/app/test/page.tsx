import AccordionDemo from '@/components/Accordion'
import TestDemo from '@/components/TestDemo'
import SmapleQuery from '@/components/test/SampleQuery'
import RQProvider from '@/context/RQProvider'
import '@radix-ui/themes/styles.css';
import { Container, Flex, Heading, Text, Card } from '@radix-ui/themes';
import AlertDialogDemo from '@/components/Alert'

export default function page() {
  return (
    <div>
      <Container size="1">
        <Flex direction="column">
          <Heading>Coding Issue Tracker</Heading>
          <Text color='gray'>here you can find the issue relevant to your certain project</Text>
        </Flex>
        <Flex gap="4" direction="column">
          <Card>
            <Text>hello</Text>
            <AlertDialogDemo/>
          </Card>
        </Flex>
      </Container>
      {/* <RQProvider>
        <AccordionDemo />
        <TestDemo/>
        <SmapleQuery/>
      </RQProvider> */}
    </div>
  )
}
