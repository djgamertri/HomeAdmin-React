import React, { useState } from 'react'
import './Index.css'
import imagen1 from '../assets/logo.png'
import imagen2 from '../assets/conjuntoresidencial.jpeg'
import imagen3 from '../assets/sede-2.jpg'
import imagen4 from '../assets/sede-3.jpg'
import Modal from '../Component/Modal/modal'
import Login from '../Form/Login/Login'

function Index () {
  const [LoginModal, setLoginModal] = useState(false)

  return (
    <>
      <section className='headerIndex' id='home'>
        <nav className='navIndex'>
          <a href='index.html'>
            <img src={imagen1} alt='Logo' />
          </a>
          <ul>
            <li>
              <a href='/#about'>Inicio</a>
            </li>
            <li>
              <a href='/#about'>Sobre nosotros</a>
            </li>
            <li>
              <a href='/#beneficios'>Beneficios</a>
            </li>
            <li>
              <a href='/#ubi'>Ubicación</a>
            </li>
            <li onClick={() => setLoginModal(true)}>
              <a>Ingresar</a>
            </li>
          </ul>
          <i className='fa-solid fa-xmark'>
            <i className='fa-solid fa-bars' />
          </i>
        </nav>
        <i>
          <i>
            <div className='text-box'>
              <h1>Conjunto residencial CAFAM II</h1>
              <p>
                Nuestro conjunto residencial, es una experiencia serena, con áreas verdes y parques
                que ofrecen rincones tranquilos <br />para la contemplación y juegos animados para los niños.
                <br />
                Las fachadas de las viviendas están adornadas con jardines bien cuidados, añadiendo color y vida a la comunidad.
              </p>
              <button href='/#about' className='hero-btn' id='openLogin'>
                Empieza tu experiencia
              </button>
            </div>
          </i>
        </i>
      </section>
      <section className='cards' id='about'>
        <h1>Sobre nosotros</h1>
        <p>
          Nuestra institucion cuenta con varias sedes, entre las que tenemos
        </p>
        <div className='row'>
          <div className='activitys-col'>
            <img src={imagen2} alt='sede1' width={350} height={350} />
            <h3>Sede Antonio Nariño</h3>
            <p>
              La sede Antonio Nariño es un lugar donde los sueños de los
              estudiantes toman forma. Es un espacio donde se exploran nuevas
              ideas, se cultivan talentos y se forjan amistades duraderas. Cada
              día, esta sede refleja nuestro compromiso con la educación de
              calidad y el crecimiento personal de quienes la conforman
            </p>
          </div>
          <div className='activitys-col'>
            <img src={imagen3} alt='sede2' width={350} height={350} />
            <h3>Sede Principal</h3>
            <p>
              La sede principal de nuestro colegio es el epicentro de la
              educación que transforma vidas. Es un lugar donde se promueve la
              curiosidad, la colaboración y el compromiso con el aprendizaje.
              Cada rincón respira el espíritu de la excelencia académica y la
              formación integral, creando un ambiente que impulsa el crecimiento
              intelectual y personal de nuestros estudiantes
            </p>
          </div>
          <div className='activitys-col'>
            <img src={imagen4} alt='sede3' width={350} height={350} />
            <h3>Sede Centro Piloto</h3>
            <p>
              La sede Centro Piloto es un lugar donde la tradición se combina
              con la innovación, y donde se fomenta el respeto, la tolerancia y
              la responsabilidad. Es un símbolo de nuestro compromiso con la
              educación de calidad y la formación integral de nuestros
              estudiantes en el corazón de la ciudad
            </p>
          </div>
        </div>
      </section>
      <section className='activitys' id='beneficios'>
        <h1>Beneficios</h1>
        <p>
          Tenemos bastantes beneficios al vivir en nuestro conjunto, conocelos{' '}
        </p>
        <div className='row'>
          <div className='col'>
            <h3>Fútbol Escolar</h3>
            <p>
              Nuestra institución ofrece emocionantes actividades deportivas,
              como el fútbol, donde los estudiantes pueden aprender habilidades
              deportivas, fomentar la camaradería y disfrutar de una sana
              competencia en un entorno seguro y supervisado
            </p>
          </div>
          <div className='col'>
            <h3>Club de Ciencias</h3>
            <p>
              {' '}
              Explora el mundo de la ciencia en nuestro Club de Ciencias, donde
              los estudiantes participan en experimentos, proyectos de
              investigación y actividades innovadoras que despiertan la
              curiosidad y el pensamiento crítico
            </p>
          </div>
          <div className='col'>
            <h3>Club de Arte Creativo</h3>
            <p>
              Para los amantes del arte, ofrecemos un Club de Arte Creativo
              donde los estudiantes pueden desarrollar su creatividad, explorar
              diversas formas de expresión artística y exhibir su talento en
              exposiciones escolares
            </p>
          </div>
        </div>
      </section>
      <section className='activitys' id='ubi'>
        <h1>Ubicación</h1>
        <p>
          Nos puedes encontrar en esta dirección, te esperamos
        </p>
        <iframe
          title='Google Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1080682002457!2d-74.11878175988271!3d4.75125384123566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8592fe6715e9%3A0x681285f9046dfe8e!2sCiudadela%20CAFAM%2C%20Cra.%20145%20%23142f-59%2C%20Suba%2C%20Bogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1701245011807!5m2!1ses-419!2sco'
          width='1500'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </section>
      <footer>
        <div className='footer-content'>
          <h4>HomeAdmin</h4>
          <div className='social-icons'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-facebook' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-instagram' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-github' />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </footer>
      <Modal isOpen={LoginModal} closeModal={() => setLoginModal(false)} title='Ingresar'>
        <Login closeModal={() => setLoginModal(false)} />
      </Modal>
    </>
  )
};

export default Index
