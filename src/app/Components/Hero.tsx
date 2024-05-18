"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import { Span } from "next/dist/trace";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"2xl"} className="bg-black">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={300}
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          lineHeight={"100%"}
          textColor={"white"}
        >
          {/* Meeting scheduling{' '} */}
          {/* <Text as={'span'} color={'orange.400'}>
            made easy
          </Text> */}
          We are experts in{" "}
          <Text as={"span"} fontWeight={600}>
            design
          </Text>
          ,{" "}
          <Text as={"span"} fontWeight={600}>
            build
          </Text>{" "}
          and{" "}
          <Text as={"span"} fontWeight={600}>
            furniture solutions
          </Text>{" "}
          for your workspace
        </Heading>
        <Text color={"white"} maxW={"3xl"}>
          We create unique offices, retail and hospitality spaces for companies
          of all sizes. We have a global reach and deep local expertise.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            bg={"black"}
            textColor={"white"}
            borderWidth={1}
            borderColor="white"
            px={{ base: "3", sm: "6" }}
            borderRadius={0}
            // colorScheme={'orange'}
            // bg={'orange.400'}
            _hover={{ borderColor: "#C3C32F", textColor: "#C3C32F" }}
          >
            Who We Are
          </Button>
          <Button
            borderRadius={0}
            px={{ base: "3", sm: "6" }}
            bg={"black"}
            textColor={"white"}
            borderWidth={1}
            borderColor="white"
            _hover={{ borderColor: "#C3C32F", textColor: "#C3C32F" }}
          >
            Contact Us
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
