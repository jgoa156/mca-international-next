import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";

import {
  CardsWrapper,
  Card
} from "./components";

export default function Supply() {
  const cards = [
    {
      icon: "fa-solid fa-handshake",
      title: "Services",
      items: [
        "Procurement Outsourcing",
        "Full Tendering Process (RFP Preparation, Bid Tabulation and Award …)",
        "Contract and Vendor Management",
        "Material Sourcing",
        "Technical Support to Material Specification and Feasibility Study",
        "MRP System Implementation",
        "Project Management",
        "Project Logistics & Freight Forwarding",
        "Warehousing & Asset Management",
        "Customs Brokerage",
        "Operations and Maintenance",
        "Accounting & Budgeting",
        "Quality Control (Material Inspection and FAT)",
        "Legal"
      ]
    },
    {
      icon: "fa-solid fa-oil-well",
      title: "Products",
      items: [
        "Industrial MRO Supplies in general",
        "Automation & Instrumentation",
        "Electrical & Electronics",
        "Filtration & Separation",
        "HVAC and Refrigeration",
        "Hydraulics and Pneumatics",
        "Lab Supplies",
        "Material Handling",
        "Packaging & Shipping",
        "Paint & Coating",
        "Hose, Tube & Fittings",
        "Plumbing",
        "Safety & Environmental",
        "Security",
        "Tools & Hardware",
        "Valves, Actuators, Flanges and",
        "Fittings",
        "Welding"
      ]
    },
    {
      icon: "fa-solid fa-helmet-safety",
      title: "Equipment",
      items: [
        "Buildings",
        "Compressors",
        "Electrical Gear",
        "Engines",
        "Drilling Rigs",
        "Drilling Equipment",
        "Generators",
        "Pipe",
        "Prefabricated Skids",
        "Pressure Vessels",
        "Pump & Motors",
        "Specialty Valves"
      ]
    },
  ];

  return (
    <SectionWrapper id="supply">
      <div>
        <AlternativeTitle>What we supply</AlternativeTitle>

        <CardsWrapper>
          {cards.map((card, i) =>
            <Card key={i}>
              <i className={card.icon} />
              <h3>{card.title}</h3>

              <ul>
                {card.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </Card>
          )}
        </CardsWrapper>
      </div>
    </SectionWrapper>
  );
}