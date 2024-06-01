"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {ChevronDownIcon} from "@radix-ui/react-icons";

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionComponent =
  () => (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item
        className="AccordionItem"
        value="item-1"
      >
        <AccordionTrigger>
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to
          the WAI-ARIA design
          pattern.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item
        className="AccordionItem"
        value="item-2"
      >
        <AccordionTrigger>
          Is it unstyled?
        </AccordionTrigger>
        <AccordionContent>
          {`Yes. It's unstyled by default, giving you freedom over the look and feel.`}
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item
        className="AccordionItem"
        value="item-3"
      >
        <AccordionTrigger>
          Can it be animated?
        </AccordionTrigger>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            Yes! You can
            animate the
            Accordion with CSS
            or JavaScript.
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );

const AccordionTrigger =
  React.forwardRef<
    HTMLButtonElement,
    AccordionTriggerProps
  >((props, ref) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={`AccordionTrigger ${props.className || ""}`}
        {...props}
        ref={ref}
      >
        {props.children}
        <ChevronDownIcon
          className="AccordionChevron"
          aria-hidden="true"
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ));

const AccordionContent =
  React.forwardRef<
    HTMLElement,
    AccordionTriggerProps
  >(
    ({
      children,
      className,
      ...props
    }) => (
      <Accordion.Content
        className={`AccordionContent ${className}`}
        {...props}
      >
        <div className="AccordionContentText">
          {children}
        </div>
      </Accordion.Content>
    )
  );

// 디스플레이 네임 설정 (개발 확인용)
AccordionTrigger.displayName =
  "AccordionTrigger";
AccordionContent.displayName =
  "AccordionContent";

export default AccordionComponent;
