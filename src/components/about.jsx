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
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eum rerum autem deserunt aliquid fugit molestias iusto <br/>commodi accusamus saepe ut quam voluptas<br/> et vero, porro non enim<br/> maxime quidem impedit necessitatibus.<br/> Explicabo fugit exercitationem, omnis modi repellat <br/>dignissimos autem quae<br/>. Beatae nesciunt deserunt maxime voluptates ipsa<br/> sint temporibus placeat expedita.</p>
                      <button>อ่านต่อ</button>
                  </div>
                </Fade>
              <Fade left><img src="public/Benefits of choosing our Full Stack Development Services illus.png" /> </Fade>
          </div>
        </Fade>
    </div>
  )
}
