import SmapleQuery from "@/components/test/SampleQuery";

import RQProvider from "@/components/context/RQProvider";

export default function page() {
  return (
    <div>
      <RQProvider>
        {/* <AccordionDemo /> */}
        <SmapleQuery />
      </RQProvider>
    </div>
  );
}
