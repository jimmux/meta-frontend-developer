import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const sections = [
  {
    name: "Projects",
    idPrefix: "projects"
  },
  {
    name: "Contact Me",
    idPrefix: "contactme"
  }
];

const Header = () => {

  // Bonus section
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const transformBox = useRef();
  
  const handleScroll = () => {
    if (window.scrollY > scrollPosition) {
      transformBox.current.style.transform = "translateY(-200px)";
    } else if (window.scrollY < scrollPosition) {
      transformBox.current.style.transform = "translateY(0)";      
    }
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },
    [scrollPosition]
  );
  // End bonus section (except ref prop applied below)

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navSocials = () => socials.map(({ icon, url }) => (
    <a key={ url } href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  ));

  const navSections = () => sections.map(({ name, idPrefix }) => (
    <a
      key={idPrefix}
      href={`./#${idPrefix}`}
      onClick={handleClick(idPrefix)}
    >
      {name}
    </a>
  ));

  return (
    <Box
      ref={ transformBox }
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      // Nav was getting rendered behind other elements on scroll
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              { navSocials() }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              { navSections() }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
