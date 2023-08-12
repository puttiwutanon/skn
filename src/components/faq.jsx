import React from 'react';
import Fade from 'react-reveal/Fade';

export const Faq = () => {
  return (
    <div className='faq' id='faq'>
        <Fade top>
            <h1>คำถามที่ถามบ่อย</h1>
            <div className="faq-container">
                <details>
                    <summary>ชุมนุมนี้สอนเรื่องอะไร</summary>
                    <div className="faq-content">
                        <p>ชุมนุมนี้สอนเรื่องการสร้างเว็บไซต์ด้วยภาษาHTML CSS และ javascript</p>
                    </div>
                </details>

                <details>
                    <summary>ได้อะไรจากการอยู่ชุมนุมนี้</summary>
                    <div className="faq-content">
                        <p>ได้ความรู้เกี่ยวกับการสร้างเว็บไซต์คร้าวๆ</p>
                    </div>
                </details>

                <details>
                    <summary>ต้องเก่งคณิตสำหรับการเขียนดปรแกรมมั้ย</summary>
                    <div className="faq-content">
                        <p>ไม่ต้องเก่งคณิตก็ได้แต่ขอให้บวก ลบ คูณและหารได้ก็พอ</p>
                    </div>
                </details>

                <details>
                    <summary>สามารถหารายได้เสริมจากการสร้างเว็บไซต์ได้มั้ย</summary>
                    <div className="faq-content">
                        <p>ได้ โดยการทำfreelancing</p>
                    </div>
                </details>

                <details>
                    <summary>ต้องมีพื้นฐานการเขียนโปรแกรมก่อนเข้าชุมนุมมั้ย</summary>
                    <div className="faq-content">
                        <p>ไม่ต้องก็ได้เพราะประธานจะสอนตั้งแต่เริ่มเลย</p>
                    </div>
                </details>

                <details>
                    <summary>การทำเว้บไซตืต้องใช้เงินมั้ย</summary>
                    <div className="faq-content">
                        <p>ไม่ต้องก็ได้เพราะมีบางบริการที่ให้โฮสติ้งเว็บไซต์ฟรี</p>
                    </div>
                </details>

                <details>
                    <summary>โฮสติ้ง คืออะไร</summary>
                    <div className="faq-content">
                        <p>โฮสติ้ง (Hosting) คือ รูปแบบการให้บริการอย่างหนึ่ง สำหรับเป็นพื้นที่ในการแสดงผลข้อมูลออนไลน์ผ่านอินเตอร์เน็ต สำหรับผู้ที่ต้องการเผยแพร่ข้อมูลแบบออนไลน์ website, blog, ร้านค้า online ให้ผู้อื่นสามารถเข้ามารับชมข้อมูลข่าวสาร ดาวน์โหลดข้อมูล หรืออื่นๆ จะต้องมีเว็บไซด์ขึ้นมาก่อน และค่อยนำเว็บไซด์ที่สร้างไว้นั้น อัพโหลดขึ้นมาที่ระบบที่ให้บริการฝากพื้นที่ ที่เราเรียกกันว่า ระบบโฮสติ้ง</p>
                    </div>
                </details>
            </div>
        </Fade>
    </div>
  )
}
