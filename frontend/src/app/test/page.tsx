import AccordionDemo from "@/components/Accordion";
import SmapleQuery from "@/components/test/SampleQuery";

import RQProvider from "@/context/RQProvider";

export default function page() {
  return (
    <div>
      <RQProvider>
        <AccordionDemo />
        <SmapleQuery />
      </RQProvider>
    </div>
  );
}
