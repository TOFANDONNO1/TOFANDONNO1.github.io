import React from 'react';
import Githubcalender from 'react-github-calendar';
import { VscGithub } from 'react-icons/vsc';

export default function Stats() {
  return (
    <>
      <section id='stats'>
        <h2> <u>Github Stats</u> </h2>
        <div className='sm-stata-div stats-div' >
          <img 
          id="github-stats-card"
            className='img2 mn-sm-bet'
            src='https://github-readme-stats-sigma-five.vercel.app/api?username=TOFANDONNO1'
            alt='TOFANDONNO1'
          />
          <img id="github-top-langs"
            className='img1 mn-sm-bet'
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=TOFANDONNO1&layout=compact'
            alt='TOFANDONNO1'
          />
        </div>
        <div className='git-icon' id="github-stats-card">
          <a 
            className='anchor-tags'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/TOFANDONNO1'
          >
            <abbr title='Open Github Profile'>
              <VscGithub className='github-profile' />
            </abbr>
          </a>
        </div>
<div>
  <img   id="github-streak-stats" src="https://camo.githubusercontent.com/8720573720ce17c2a297deab9e388d8c7f38e5019cfdee08bca514b96205c087/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d746f66616e646f6e6e6f3126" alt="Stak" />
</div>
<br />

        <div margin="auto"  class="react-activity-calendar">
          <Githubcalender className="c" username="TOFANDONNO1" blockSize={10} color={"rgb(81,148,240)"} />
        </div>
      </section>
    </>
  );
}