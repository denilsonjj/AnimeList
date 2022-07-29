import React from "react";
import style from "../style/Home.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Home = () => {
  return (
    <div className={style.content}>
      <h1 className={style.title}>Olá, Seja bem vindo!</h1>
      <div>
        <div className={style.content1}>
          <h2>
            Você pode pesquisar e ter acesso a dados dos seus animes
            preferidos!
          </h2>
        </div>
        <div className={style.content2}>
          <h3 className={style.textContact}>Entre em contato comigo!</h3>
          <div className={style.iconsArea}>
            <a href="https://www.linkedin.com/in/denilsonjj/" target="_blank" without rel="noreferrer">
              <LinkedInIcon sx={{ color: 'white', fontSize: '40px', margin: '4px' }} />
            </a>
            <a href="#"target="_blank" without rel="noreferrer" >
              <InstagramIcon sx={{ color: 'white', fontSize: '40px', margin: '4px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
