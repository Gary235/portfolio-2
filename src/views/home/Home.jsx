import { Arrow, Buttons, HomeContainer, ImageWrapper, Info, ProfileImage, Scroll, Titles } from "./styles";

import { TitleM, TitleXL } from "../../styled-components/titles";
import { BWButton, MulticolorButton } from "../../styled-components/buttons";
import { BlurredGradient } from "../../styled-components/blurred-gradient";

import TextGradient from "../../components/text-gradient/TextGradient";

import profilePhoto from '../../assets/profile.jpg'

const Home = () => {

  return (
    <HomeContainer id="home">
      <Info>
        <Titles>
          <TitleXL>hey, I'm <wbr /> <TextGradient>Gary</TextGradient></TitleXL>
          <TitleM>web developer</TitleM>
        </Titles>
        <ImageWrapper> <ProfileImage src={profilePhoto} /> </ImageWrapper>
      </Info>
      <Buttons>
        <MulticolorButton>see my projects</MulticolorButton>
        <BWButton>contact me</BWButton>
      </Buttons>
      <BlurredGradient />
      <Scroll>scroll <Arrow /></Scroll>
    </HomeContainer>
  )
}

export default Home