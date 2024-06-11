import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header: FC = () => {
  return (
    <Flex
      h={16}
      borderBottom="2px"
      borderColor="gray.200"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        w={36}
        fontWeight="bold"
        fontSize={20}
        ml={4}
        borderRight="2px"
        borderColor="gray.200"
      >
        Save the SEA
      </Flex>
      <Flex gap={24} display={["none", "none", "flex"]}>
        <Button variant="link" colorScheme="blue">
          Home
        </Button>
        <Button variant="link" colorScheme="blue">
          Mint
        </Button>
        <Button variant="link" colorScheme="blue">
          Sale
        </Button>
      </Flex>
      <Flex w={40} justifyContent="end" display={["none", "none", "flex"]}>
        <Button variant="link" mr={4}>
          Login
        </Button>
      </Flex>
      <Flex display={["flex", "flex", "none"]} mr={4}>
        <Menu>
          <MenuButton
            textColor="blue.500"
            bgColor="white"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Login</MenuItem>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Mint</MenuItem>
            <MenuItem>Sale</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
