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
import { Row, Col } from "react-bootstrap";

const SavedCards = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState();

  const { uid } = props;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/cards/${uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error && !data.message) {
          alert(JSON.stringify(data));
          setData(data);
          setLoading(false);
        }

        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Card>
        <Heading as={"h5"} size={"md"} color={"gray.600"}>
          My Saved Cards
        </Heading>

        <Loading />
        <br />
        {!props.hideNew ? (
          <NewContactModal uid={uid || getLoggedInUID()} />
        ) : (
          <></>
        )}
      </Card>
    );

  if (!data) {
    return (
      <>
        <Card>
          <Heading as={"h5"} size={"md"} color={"gray.600"}>
            My Saved Cards
          </Heading>
          <br />
          {!props.hideNew ? (
            <NewContactModal uid={uid || getLoggedInUID()} />
          ) : (
            <></>
          )}
        </Card>
      </>
    );
  }

  return (
    <Card>
      <Heading as={"h5"} size={"md"} color={"gray.600"}>
        My Saved Cards
      </Heading>
      <br />

      <Row>
        {data
          ? Object.values(data).map((contact, i) => {
              return (
                <ContactCard
                  key={contact.id}
                  id={contact.id}
                  displayName={contact.displayName}
                  imgSrc={contact.imgSrc}
                  phoneNumber={contact.phoneNumber}
                  email={contact.email}
                  relationship={contact.relationship}
                />
              );
            })
          : null}

        {!props.hideNew ? (
          <NewContactModal uid={uid || getLoggedInUID()} />
        ) : (
          <></>
        )}
      </Row>
    </Card>
  );
};

export default SavedCards;
