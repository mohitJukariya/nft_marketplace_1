import React from 'react'
import '../App.css';

function About() {
  return (
    <div className="aboutcss">
      <div className="abouts">
        <div className="about1">
          <h2>About Us</h2>
          <p>
            Nulla maximus lorem ac finibus tincidunt. Cras tempor quam eros, ut
            egestas dolor pulvinar nec. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Quisque faucibus sapien nibh, eu luctus
            dolor maximus vel. In gravida pellentesque elementum. Etiam
            condimentum nec metus sed porttitor. Sed augue ante, convallis a
            sapien at, faucibus posuere orci. Pellentesque condimentum tristique
            ornare. Suspendisse nunc nisl, cursus quis vestibulum ut, dictum
            vitae sem. In hac habitasse platea dictumst. Proin elit velit,
            luctus in orci non, venenatis gravida nisl. Sed ac nisi massa.
            Vestibulum accumsan dapibus augue, eu iaculis libero finibus rutrum.
            Nam quis metus eget felis maximus commodo. Mauris fermentum urna et
            tortor hendrerit, ut venenatis quam tempor. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
          </p>
        </div>
        <div className="about2"></div>
      </div>

      <div className="contact">
        <div className="contact1"></div>
        <div className="contact2">
          <form  action="https://formspree.io/f/mqkjpllk" method="POST" >
            <h2>Contact Us </h2>
            <input type="text" name='Name' placeholder="Full Name"></input>
            <input type="E-mail" name='E-Mail' placeholder="E-mail"></input>
            <input type="number" name='Contact Number' placeholder="Contact Number"></input>
            <input type="text" name='Subject' placeholder="Subject"></input>
            <textarea typet="text" name='Message' placeholder="Type Here..."></textarea>
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About
