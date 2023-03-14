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
          <figure className='figure1 '   >
            <AiFillHtml5 className='tool'   />
            <figcaption >HTML 5</figcaption>
          </figure>

          <figure className='figure1  mn-flex-50'  >
            <IoLogoCss3 className='tool' />
            <figcaption >CSS 3</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiSass className='tool' />
            <figcaption >SCSS</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiJavascript className='tool' />
            <figcaption >JS</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiReact className='tool' />
            <figcaption >React</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiRedux className='tool' />
            <figcaption >Redux</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiMongodb className='tool' />
            <figcaption >Mongo DB</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiNodedotjs className='tool' />
            <figcaption >Node.js</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiExpress className='tool' />
            <figcaption >Express.js</figcaption>
          </figure>

          <figure className='figure1'  >
            <SiTypescript className='tool' />
            <figcaption >TS</figcaption>
          </figure>

        </div>
      </section>
    </div>
  );
}

export default Skills;