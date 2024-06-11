import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: FC = () => {
  return (
    <Flex
      maxW={1280}
      mx="auto"
      minH="90vh"
      flexDir="column"
      border="2px"
      borderColor="gray.200"
      boxShadow="2xl"
      rounded="lg"
      my={8}
    >
      <Header />
      <Flex flexGrow={1}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
