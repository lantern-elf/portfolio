import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faBluesky, faGithub, faArtstation } from '@fortawesome/free-brands-svg-icons'
import Navbar from "../../components/navbar/Navbar";
import './about.css'

const About = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | About`}</title>
            </Helmet>
            <Navbar about={true}/>
            <main className="pages-wrapper"> 
                <div className="about">
                    <div className="about-title">
                        about me
                    </div>
                    <div className="profile-picture">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">
                            <div className="image-wrapper">
                                <img src="./images/profile_picture.png" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="about-info">
                        <p>
                            Greetings. I am <b>Lantern</b>. I am a <i>2D Artist</i> and a <i>programmer</i>, based on Indonesia.
                            I specialize in <b>art</b> and <b>coding</b>. My expertise includes illustrations, concept art, 
                            front-end website development, and game development.
                        </p>
                    </div>
                    <div className="about-links">
                        <a className="twitter-icon" href="https://twitter.com/lantern_elf" target="black"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="instagram-icon" href="https://www.instagram.com/lantern_elf" target="black"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="bluesky-icon" href="https://bsky.app/profile/lanternelf.bsky.social" target="black"><FontAwesomeIcon icon={faBluesky} /></a>
                        <a className="facebook-icon" href="https://www.facebook.com/lanternelf" target="black"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="github-icon" href="https://github.com/lantern-elf" target="black"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="artstation-icon" href="https://www.artstation.com/lantern_elf" target="black"><FontAwesomeIcon icon={faArtstation} /></a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About