import React, { Component, useEffect, useState } from "react";
import {
  Container,
  Heading,
  Box,
  Spinner,
  Center,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// UI Components
import Card from "../../common/card";
import ContactCard from "./contactCard";
import Loading from "../../common/loading";
import NewContactModal from "./newContactModal";
import { isMobile, isBrowser } from "react-device-detect";

// Scripts
import getLoggedInUID from "../../scripts/getLoggedInUID";

const Contacts = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState();

  const { uid } = props;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/contacts/${uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setData(data);
          setLoading(false);
        }

        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Card>
        <Loading />

        <br />
        <NewContactModal uid={uid || getLoggedInUID()} />
      </Card>
    );

  if (!data) {
    return (
      <>
        <Card bc={isMobile}>
          <Text>No contacts found.</Text>
          <NewContactModal uid={uid || getLoggedInUID()} />
        </Card>
      </>
    );
  }

  return (
    <>
      {Object.values(data).map((contact, i) => {
        return (
          <ContactCard
            key={i}
            displayName={contact.displayName}
            imgSrc={contact.imgSrc}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
          />
        );
      })}

      <NewContactModal uid={uid || getLoggedInUID()} />
    </>
  );
};

export default Contacts;
