import React from 'react';

import { SiVisualstudio } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { TbBrandTailwind } from 'react-icons/tb';
import { GrHeroku } from 'react-icons/gr';
import { SiVercel } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';

function Tools() {
  return (
    <div id='tool'>
      <section id='tools' style={{ backgroundColor: 'black' }}>
        <h2> <u>Tools</u> </h2>
        <div>
          <figure className='figure2'>
            <SiVisualstudio className='tool' />
            <figcaption>VS Code</figcaption>
          </figure>

          <figure className='figure2'>
            <SiNpm className='tool' />
            <figcaption>NPM</figcaption>
          </figure>

          <figure className='figure2'>
            <FaGitAlt className='tool' />
            <figcaption>Git</figcaption>
          </figure>

          <figure className='figure2'>
            <FaGithubSquare className='tool' />
            <figcaption>Github</figcaption>
          </figure>

          <figure className='figure2'>
            <SiMongodb className='tool' />
            <figcaption>Atlas</figcaption>
          </figure>

          <figure className='figure2'>
            <GrHeroku className='tool' />
            <figcaption>Heroku</figcaption>
          </figure>

          <figure className='figure2'>
            <SiVercel className='tool' />
            <figcaption>Vercel</figcaption>
          </figure>

          <figure className='figure2'>
            <SiFirebase className='tool' />
            <figcaption>Firebase</figcaption>
          </figure>

          <figure className='figure2'>
            <SiNetlify className='tool' />
            <figcaption>Netllify</figcaption>
          </figure>

          <figure className='figure2'>
            <TbBrandTailwind className='tool' />
            <figcaption>Tailwind</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Tools;