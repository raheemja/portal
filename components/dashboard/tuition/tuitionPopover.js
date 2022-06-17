// Chakra-UI Components
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";

import {
  MdCheckCircle,
  MdSettings,
  WarningIcon,
  InfoIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const TuitionPopover = (props) => {
  const { message } = props;

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <sup>
            <InfoIcon ml={2} boxSize={"3"} />
          </sup>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
            More on your tuition
          </PopoverHeader>
          <PopoverBody
            color={"gray.500"}
            fontSize={{ base: "sm", sm: "md" }}
            fontWeight={"normal"}
          >
            {message}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default TuitionPopover;
