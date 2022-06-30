import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

// Components
import Card from "../../common/card";
import Collapsible from "react-collapsible";

// Scripts
import _ from "lodash";
import { Row, Col } from "react-bootstrap";

// Icons
import { CheckCircleIcon } from "@chakra-ui/icons";

const CourseCard = (props) => {
  const { id, shortname, fullname, displayname, summary, category } = props;

  return (
    <>
      <ListItem>
        <Collapsible
          trigger={
            <Heading
              as={"h6"}
              size="sm"
              color={useColorModeValue("blue.400", "blue.400")}
              dangerouslySetInnerHTML={{ __html: displayname }}
            />
          }
        >
          <Box mt={[5]}>
            <Row>
              <Col xs={1} md={1} lg={1} xl={1}>
                <Box
                  w={"full"}
                  color={""}
                  bg={useColorModeValue("green.400")}
                  boxShadow={"1xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <br />
                  <Stack textAlign={"left"} align={"left"}>
                    <br />
                    <br />
                  </Stack>
                </Box>
              </Col>
              <Col xs={11} md={11} lg={11} xl={11}>
                <Text
                  color={"gray.600"}
                  fontSize={{ base: "sm", sm: "md" }}
                  dangerouslySetInnerHTML={{ __html: summary }}
                />
              </Col>
            </Row>
          </Box>
          <hr />
        </Collapsible>
      </ListItem>
    </>
  );
};

export default CourseCard;
