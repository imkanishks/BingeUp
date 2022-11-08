import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import getIcon from "util/getIcon";
import logoDir from "assets/img/tmdb.png";
import {
  Footer,
  FooterContainer,
  DBLogo,
  LogoLink,
  SocialIcon,
  SocialLink,
  Note,
} from "./styles";

export default function FooterComp() {
  const { pathname } = useLocation();
  const [isDisplayed, setIsDisplayed] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (pathname.includes("login")) {
      setIsDisplayed(false);
    } else {
      setIsDisplayed(true);
    }
  }, [pathname]);

  return (
    <Footer isDisplayed={isDisplayed}>
      <FooterContainer
        ref={ref}
        initial={"hidden"}
        animate={controls}
        variants={variants}
      >
        
          <DBLogo src={logoDir} alt="Movie DB Logo" />
        

        <Note>
          Made by
          <LogoLink
            href="https://imkanishks.wixsite.com/get2knowkanishk"
            target="_blank"
            rel="noreferrer"
          >
            Kanishk Sharma |
          </LogoLink>
          <LogoLink
            href="https://www.linkedin.com/in/yash-kd6"
            target="_blank"
            rel="noreferrer"
          >
            Yash Kumar |
          </LogoLink>
          <LogoLink
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Varsha Sharma |
          </LogoLink>
          <LogoLink
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Amit Sharma
          </LogoLink>
        </Note>

        <div>
          <SocialLink
            href="https://twitter.com/Chandigarh_uni"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <use href={getIcon("twitter")} />
            </SocialIcon>
          </SocialLink>
          <SocialLink
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <use href={getIcon("github")} />
            </SocialIcon>
          </SocialLink>
        </div>
      </FooterContainer>
    </Footer>
  );
}
