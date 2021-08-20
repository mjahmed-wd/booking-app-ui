import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function IAccrodition({ title, children }) {
  return (
    <div>
      <Accordion className="bg-transparent" style={{border:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <b>{title}</b>
        </AccordionSummary>
        <AccordionDetails>
            <div>
            {children}
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
