import { Card as ChakraCard, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Started with chakra card because it just works, but if time allows
  //   I might also try with suggested components to see how close I can get.
  return (
    <ChakraCard>
        <Image
          src={ imageSrc }
          alt={ title }
          rounded="md"
        />
      <CardBody>
        <VStack align='stretch'>
          <Heading size="sm">{ title }</Heading>
          <Text color="grey">{description}</Text>
          <a href="./#projects-section">
            <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
          </a>
        </VStack>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;
