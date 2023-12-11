import React, { useState } from 'react'
import './Index.css'
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
          <h1 className='navh1' alt='Logo'> CAFAM </h1>
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
          Nuestro conjunto cuenta con varios espacios y caracteristicas que lo hacen agradable
        </p>
        <div className='row'>
          <div className='activitys-col'>
            <img src={imagen2} alt='sede1' width={350} height={350} />
            <h3>Ubicación</h3>
            <p>
              Esta estrategicamente ubicado, proporcionando fácil acceso a servicios, áreas comerciales y rutas principales.Se encuetra e una zona segura y tranquila.
            </p>
          </div>
          <div className='activitys-col'>
            <img src={imagen3} alt='sede2' width={350} height={350} />
            <h3>Viviendas</h3>
            <p>
              Contamos con una variedad de vviendas comodas para tu familia para satisfacer las necesidades y preferencias de los residentes; las viviedas tienen un diseño moderno y funcional
            </p>
          </div>
          <div className='activitys-col'>
            <img src={imagen4} alt='sede3' width={350} height={350} />
            <h3>Comunidad</h3>
            <p>
              Contamos con distintos eventos y actividades comunitarias que fometan la interacción entre los otros residentes y fortalecen el sentido de la comunidad.
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
            <h3>Servicios</h3>
            <p>
              Tenemos una administración eficiente con procesos transparentes y una comunicación abierta con los residentes, contamos con asignación de parqueaderos, alquiler de salón comunal y zona BBQ
            </p>
          </div>
          <div className='col'>
            <h3>Comites participativos</h3>
            <p>
              {' '}
              Los residentes tienen la oportunidad de participar en comités y contribuir a la toma de desiciones para mejorar constantemente la calidad de vida en el conjunto
            </p>
          </div>
          <div className='col'>
            <h3>Recogida de residuos</h3>
            <p>
              Se proporciona un servicio regular de recogida de residuos para mantener las áreas comunes limpias y ordenadas
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
            <a href='https://web.facebook.com/cafamoficial/?locale=es_LA&_rdc=1&_rdr' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-facebook' />
            </a>
            <a href='https://www.instagram.com/cafamoficial/' target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-instagram' />
            </a>
            <a href='https://github.com/djgamertri/HomeAdmin-React' target='_blank' rel='noopener noreferrer'>
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
