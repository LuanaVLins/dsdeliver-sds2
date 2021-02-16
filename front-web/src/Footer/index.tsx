import'./styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer (){
    return (
       <footer className="main-footer">
           Desenvolvido por Luana Lins durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">     
                <a href="https://www.linkedin.com/in/luanalinsv/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/luanalinsv/?hl=pt-br" >
                    <InstagramIcon/>
                </a>
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
