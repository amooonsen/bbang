import AccordionDemo from '@/components/Accordion'

import RQProvider from '@/context/RQProvider'


export default function page() {
  return (
    <div>
      <RQProvider>
        <AccordionDemo />
      </RQProvider>
    </div>
  )
}
