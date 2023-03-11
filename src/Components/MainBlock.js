import "../assets/Style/App.css";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import TextBlock from "../Components/TextBlock.js";

function MainBlock() {

  return (
    // ? pages indicate that how many pages you want to display . we can add multiple layer in a single page

    // ? offset indicates the page number .. like offset 0, 1, 2, 3,  means  page 1, page 2, page 3, page 4

    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.20}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.16}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default MainBlock;

// ! The Parallax component creates a scrollable container in which ParallaxLayers can be placed . And we can add animation on those parallax layers.
