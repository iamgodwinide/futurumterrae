import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function AccordionComponent() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">WHAT IS $FUTURUM</AccordionHeader>
          <AccordionBody accordionId="1">
          In a world ravaged by a financial crisis, a new decentralized currency called $FUTURUM emerged, based on blockchain technology and resistant to inflation and manipulation. The currency brought people together to create a new global economy, based on transparency, fairness, and cooperation, proving that even in the darkest of times, humanity could still find a way to thrive.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">HOW TO BUY $FUTURUM</AccordionHeader>
          <AccordionBody accordionId="2">
          The $FUTURUM token will be fairlaunched on the Ethereum network and will be purchasable on Uniswap. The contract address is not out yet, but will be published on our Telegram and Twitter.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;