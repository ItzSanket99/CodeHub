import React from 'react'
import {AiFillYoutube,AiFillInstagram,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>CodeHub.</h1>
            <p>All right reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <div>
                <a href="https://youtube.com" target={'blank'}><AiFillYoutube /> Youtube</a>
                <a href='https://www.instagram.com/s.a.n.k.e.t_jagtap' target={'blank'}><AiFillInstagram/> Instagram</a>
                <a href='https://www.github.com/ItzSanket99' target={'blank'}><AiFillGithub/> GitHub</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer