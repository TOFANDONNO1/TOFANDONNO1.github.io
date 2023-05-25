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
      <section id='tools' style={{ backgroundColor: 'black' }}>
        <h2> <u>Tech Stack</u> </h2>

        <div className='skils-box'>
          <figure className='figure1 skills-card'   >
            <AiFillHtml5 className='tool skills-card-img'   />
            <figcaption  className="skills-card-name">HTML 5</figcaption>
          </figure>

          <figure className='figure1  mn-flex-50 skills-card'  >
            <IoLogoCss3 className='tool skills-card-img' />
            <figcaption className="skills-card-name">CSS 3</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiSass className='tool skills-card-img' />
            <figcaption className="skills-card-name">SCSS</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiJavascript className='tool skills-card-img' />
            <figcaption className="skills-card-name">JS</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiReact className='tool skills-card-img' />
            <figcaption className="skills-card-name">React</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiRedux className='tool skills-card-img' />
            <figcaption className="skills-card-name">Redux</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiMongodb className='tool skills-card-img' />
            <figcaption className="skills-card-name">Mongo DB</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiNodedotjs className='tool skills-card-img' />
            <figcaption className="skills-card-name">Node.js</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiExpress className='tool skills-card-img' />
            <figcaption className="skills-card-name">Express.js</figcaption>
          </figure>

          <figure className='figure1 skills-card'  >
            <SiTypescript className='tool skills-card-img' />
            <figcaption className="skills-card-name">TS</figcaption>
          </figure>

        </div>
      </section>
    </div>
  );
}

export default Skills;