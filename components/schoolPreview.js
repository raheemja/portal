import { useRef } from "react";
import {
  Popover,
  PopoverTrigger,
  Text,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Link,
  Image,
} from "@chakra-ui/react";

// Scripts
import getSchoolInfo from "../scripts/getSchoolInfo";

const SchoolPreview = (props) => {
  const initialFocusRef = useRef();

  const school = getSchoolInfo(props.schoolCode);

  return (
    <>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <Link color="blue.400" href="#">
            {school.name}
          </Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Contact Details</PopoverHeader>
          <PopoverBody></PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SchoolPreview;
