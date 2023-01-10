import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import Title from "components/shared/Title";

import {
  CallingCard,
  Contacts
} from "./components";

export default function Contact() {
  const contacts = [
    { icon: "fa-solid fa-envelope", contact: "monica.dutra@mcaig.com", link: "mailto:monica.dutra@mcaig.com" },
    { icon: "fa-brands fa-whatsapp", contact: "+1 (832) 571-9201", link: "https://wa.me/18325719201" },
  ];

  return (
    <SectionWrapper id="contact">
      <div>
        <CallingCard>
          <Title>Contact Us</Title>
          {/*<img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" />*/}

          <h3>Mônica Dutra</h3>
          <p>President and CEO</p>

          <p><i>We are looking forward to serving your business.</i></p>

          <Contacts>
            {contacts.map((contact, index) =>
              <a key={index} href={contact.link} target="_blank" rel="noreferrer">
                <i className={contact.icon} />
                {contact.contact}
              </a>
            )}
          </Contacts>

          <hr />

          <p>
            MCA INTERNATIONAL GROUP, INC.<br />
            4700 NW 2nd AVE. #202<br />
            BOCA RATON, FLORIDA 33431
          </p>
          <p>
            US Toll-Free: +1-844-622-4685 (+1-844-MCA-INTL)
          </p>
          <p>
            <a href="mailto:sales@mcaig.com"><i className="fa-solid fa-envelope" />sales@mcaig.com</a>
          </p>
        </CallingCard>
      </div>
    </SectionWrapper>
  );
}