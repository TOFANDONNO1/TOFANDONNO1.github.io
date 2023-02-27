import React from 'react';

import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

function Skills() {
  return (
    <div id='skills'>
      <section id='tools' style={{ backgroundColor: 'orange' }}>
        <h2> <u>Tech Stack</u> </h2>

        <div className='skils-box'>
          <figure className='figure1 '  class="skills-card" >
            <AiFillHtml5 className='tool'  class="skills-card-img" />
            <figcaption class="skills-card-name">HTML 5</figcaption>
          </figure>

          <figure className='figure1  mn-flex-50' class="skills-card" >
            <IoLogoCss3 className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">CSS 3</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiSass className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">SCSS</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiJavascript className='tool' class="skills-card-img" />
            <figcaption class="skills-card-name">JS</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiReact className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">React</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiRedux className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">Redux</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiMongodb className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">Mongo DB</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiNodedotjs className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">Node.js</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiExpress className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">Express.js</figcaption>
          </figure>

          <figure className='figure1' class="skills-card" >
            <SiTypescript className='tool'  class="skills-card-img"/>
            <figcaption class="skills-card-name">TS</figcaption>
          </figure>

        </div>
      </section>
    </div>
  );
}

export default Skills;