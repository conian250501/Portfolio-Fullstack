import React from "react";
import { GiNinjaStar } from "react-icons/gi";
import { motion } from "framer-motion";

import { Section, SectionName, SectionHeading } from "../../GlobalStyles";
import {
  ContactContainer,
  ContactList,
  ContactItem,
  ContactLink,
  ContactEmail,
} from "./ContactStyles";

import { data, email } from "../../data/ContactData";

export const Contact = ({ id }) => {
  return (
    <Section
      id={id}
      width={"1440px"}
      maxWidth={"100%"}
      marginTop={"24rem"}
      margin={"0 auto"}
      marginBottom={"4rem"}
    >
      <SectionName>
        <GiNinjaStar className="icon__darts" />
        <SectionHeading>Contact</SectionHeading>
        <GiNinjaStar className="icon__darts" />
      </SectionName>
      <ContactContainer marginTop={"3.2rem"}>
        <ContactList>
          {data.map((el, index) => (
            <motion.div
              transition={{
                duration: 0.3 * (index + 2),
              }}
              initial={{
                opacity: 0,
                y: "-100px",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
            >
              <ContactLink
                key={index}
                className="contact__link"
                href={el.Link}
                target="_blank"
              >
                <ContactItem>{el.title}</ContactItem>
              </ContactLink>
            </motion.div>
          ))}
        </ContactList>
        <motion.div
          transition={{
            duration: 0.8,
          }}
          initial={{
            opacity: 0,
            y: "-100px",
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContactEmail>{email.title}</ContactEmail>
        </motion.div>
      </ContactContainer>
    </Section>
  );
};
