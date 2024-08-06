import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Coding world</h1>
            <p>Solution to all your problems</p>
        </main>
    
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
        We are your one and only solution to the tech problems you face every day. 
        We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
    </div>
    
    <div className="home3" id='about'>
      <div>
        <h1>Who We Are ?</h1>
        <p>Welcome to CodeHub: Where Passion Meets Pixels”
          <br /><br />
          At CodeHub, we’re more than just lines of code; we’re a vibrant community of curious minds, late-night debuggers, and coffee-fueled creators. Whether you’re a seasoned developer or just dipping your toes into HTML waters, this is your digital home. Expect hackathons, collaborative projects, and nerdy debates about tabs vs. spaces. So grab your favorite editor, pull up a virtual chair, and let’s build something epic together. 🚀💻
          <br /> <br />
          Feel free to tweak it to match your vision, and happy coding! If you need more content or have specific themes in mind, just let me know—I’m here to assist! 😊👩‍💻
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay : "0.3s"
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{
            animationDelay : "0.5s"
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay : "0.7s"
          }}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay : "1s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home