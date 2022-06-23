// React and Redux Components
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

// UI Components
import {
  Text,
  Alert,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Stack,
  Button,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";

// Components
import { Row, Col } from "react-bootstrap";
import Card from "../../common/card";

// Scripts
import getLoggedInUID from "../../scripts/getLoggedInUID";
import ShowSuccessMessage from "../../scripts/success";
import getError from "../../scripts/getError";

const Profile = (props) => {
  const activeUser = useSelector((state) => state.user);

  return (
    <>
      {/* Card to display general user info */}
      <Card xs={12} md={12} lg={12} xl={12}>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                Student ID
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.studentID}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6}></Col>

          <Col>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                First Name
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.firstName}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel
                htmlFor="firstName"
                color={"gray.600"}
                fontSize={{ base: "sm", sm: "md" }}
              >
                Last Name
              </FormLabel>
              <Input
                color={"gray.700"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.lastName}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel
                htmlFor="firstName"
                color={"gray.600"}
                fontSize={{ base: "sm", sm: "md" }}
              >
                Phone Number
              </FormLabel>
              <Input
                color={"gray.700"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.phoneNumber}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel
                htmlFor="firstName"
                color={"gray.600"}
                fontSize={{ base: "sm", sm: "md" }}
              >
                Email Address
              </FormLabel>
              <Input
                color={"gray.700"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.email}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6}></Col>
        </Row>
      </Card>

      {/* Card to display the user's address */}
      <Card xs={12} md={12} lg={12} xl={12}>
        <Row>
          {/*     */}
          <Col xs={12} md={12} lg={12} xl={12}>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                Street Address
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.streetAddress}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          {/*     */}
          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                Community / Town
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.town}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          {/*     */}
          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                City
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.city}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          {/*     */}
          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                Parish / State
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.state}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>

          {/*     */}
          <Col xs={12} md={6} lg={6} xl={6}>
            <FormControl>
              <br />
              <FormLabel htmlFor="firstName" color={"gray.500"}>
                Country
              </FormLabel>
              <Input
                color={"gray.500"}
                id="firstName"
                name="firstName"
                type="text"
                value={activeUser.country}
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={true}
              />
            </FormControl>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Profile;
