import React from 'react'
import Fade from 'react-reveal/Fade';

export const About = () => {
  return (
    <div className='about' id='about'>
        <Fade left>
          <h1>เกี่ยวกับเรา</h1>
          <div className="about-content">
                <Fade left>
                  <div>
                      <h1>เกี่ยวกับเรา</h1>
                      <div className='about-content-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis, quas numquam qui vel harum labore error, unde assumenda voluptas dolores sunt beatae excepturi laborum nam exercitationem ad maxime veritatis quibusdam possimus fugit enim, quod suscipit accusamus! Impedit facilis sint natus atque, sit inventore necessitatibus dignissimos, quas nam numquam dolore?</p>
                      </div>
                      <button>อ่านต่อ</button>
                  </div>
                </Fade>
              <Fade left><img src="public/Benefits of choosing our Full Stack Development Services illus.png" /> </Fade>
          </div>
        </Fade>
    </div>
  )
}
