import React from 'react';
import Fade from 'react-reveal/Fade';

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <Fade>
            <div className="contact-header">
                <h1>ติดต่อเรา</h1>
            </div>
            <div className="contact-contents">
                <div>
                    <h1>ประธานชุมนุม</h1>
                    <p><i class="fa-solid fa-phone"></i>:0950857579</p>
                    <p><i class="fa-solid fa-envelope"></i>: leoputtiwutanon25@hotmail.com</p>
                </div>
                <div className='contact-teacher'>
                    <h1>ครูที่ปรึกษาชุมนุม</h1>
                    <p>ครูสิรภัทร สมอุดร</p>
                    <p>ครูหทัยรัตน์ เชื้อโตเติม</p>
                </div>
            </div>
        </Fade>
    </div>
  )
}
