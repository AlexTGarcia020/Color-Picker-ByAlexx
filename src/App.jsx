import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Scroll from './components/Scroll';
import GradientPage from './pages/GradientPage';
import ColorExtractorS from './components/ColorExtractor';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Navbar />
        <Link to="/" className=''>
          <div className='d-flex justify-content-center'>
              <img src="/Simbol.svg" alt="logo-alex-nordic" className="img-fluid" />
          </div> 
        </Link>      
        <div id='top' className='d-flex justify-content-center contentTextOne'>
          <h1 className='text-white'>Bienvenido a mi<strong className='demo rainbow'>Color Picker</strong></h1>
        </div>
        <div className='d-flex text-container justify-content-center contentTextTwo'>
          <p><strong className='text-white fs-6 text-secondary text-base leading-tight'>Este es uno de mis proyectos: un selector de colores donde puedes crear gradientes y también subir una imagen para visualizar su paleta de colores. Si estás leyendo esto, es probable que seas un reclutador o un compañero de profesión. ¡Espero que te guste! Alex Garcia@2024</strong></p>
        </div>
        <div className="Redes">
          <Link to="https://www.linkedin.com/in/alex-garcia20/">
              <svg className='fs-3' xmlns="http://www.w3.org/2000/svg" width="4em" height="1em" viewBox="0 0 512 128"><path fill="white" d="m202.057 74.971l28.252 34.743H208l-25.143-31.908v31.908h-18.286V18.286h18.286v53.76l23.223-26.332h23.314zm-73.143-31.085a24.777 24.777 0 0 0-20.205 10.971v-9.143h-17.28v64h18.285V79.817a15.909 15.909 0 0 1 15.177-17.646c10.606 0 12.252 10.423 12.252 17.646v29.897h18.286v-33.92c0-20.114-6.675-31.908-26.149-31.908zm163.657 35.291c.07 1.34.07 2.683 0 4.023h-48v.64a16.366 16.366 0 0 0 16.732 13.074a22.949 22.949 0 0 0 16.823-6.308l12.16 9.143a39.406 39.406 0 0 1-29.715 11.794a31.909 31.909 0 0 1-33.828-34.286a32.731 32.731 0 0 1 34.377-33.371c17.189 0 31.451 12.16 31.451 35.291m-17.005-7.863a13.349 13.349 0 0 0-14.537-12.8c-8.04-.869-15.321 4.794-16.458 12.8zM18.286 18.286H0v91.428h54.857V91.43H18.286zm329.143 0h18.285v91.428h-17.28v-6.4a22.309 22.309 0 0 1-18.285 8.229a31.177 31.177 0 0 1-30.263-33.829a30.72 30.72 0 0 1 30.171-33.828a23.954 23.954 0 0 1 17.372 6.4zm1.371 59.428A14.903 14.903 0 0 0 333.989 60.8c-8.747.635-15.375 8.157-14.903 16.914c-.472 8.757 6.156 16.28 14.903 16.915A14.903 14.903 0 0 0 348.8 77.714M73.143 16.457A11.611 11.611 0 0 0 61.714 27.43c0 6.311 5.117 11.428 11.429 11.428S84.57 33.74 84.57 27.43a11.611 11.611 0 0 0-11.428-10.972M64 109.714h18.286v-64H64zM512 9.143v109.714a9.143 9.143 0 0 1-9.143 9.143H393.143a9.143 9.143 0 0 1-9.143-9.143V9.143A9.143 9.143 0 0 1 393.143 0h109.714A9.143 9.143 0 0 1 512 9.143m-91.429 36.571h-18.285v64h18.285zm2.286-18.285c0-6.312-5.117-11.429-11.428-11.429C405.117 16 400 21.117 400 27.429c0 6.311 5.117 11.428 11.429 11.428c6.311 0 11.428-5.117 11.428-11.428m70.857 48.365c0-20.114-6.674-31.908-26.148-31.908a24.777 24.777 0 0 0-20.572 10.971v-9.143h-17.28v64H448V79.817a15.909 15.909 0 0 1 15.177-17.646c10.606 0 12.252 10.423 12.252 17.646v29.897h18.285z"/></svg>
          </Link>
          <Link to="https://github.com/AlexTGarcia020"> 
              <svg className='fs-2' xmlns="http://www.w3.org/2000/svg" width="4em" height="1em" viewBox="0 0 45 16"><path fill="white" d="M8.81 7.35v5.74c0 .04-.01.11-.06.13c0 0-1.25.89-3.31.89c-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58c.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17c-.36-.11-.9-.33-2.17-.33c-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17m35.85 2.33c0 3.43-1.11 4.41-3.05 4.41c-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88M27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09c-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16c-.1.05-.74.22-1.27.22c-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17c.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83c.247 0 .481-.049.574-.05M12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97c-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25M11.19 2.68c.75 0 1.36.61 1.36 1.38c0 .77-.61 1.38-1.36 1.38c-.77 0-1.38-.61-1.38-1.38c0-.77.61-1.38 1.38-1.38m7.34 9.35l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"/></svg>
          </Link>
          <Link to="https://wa.link/yz76f6"> 
              <svg className='fs-2' xmlns="http://www.w3.org/2000/svg" width="4.31em" height="1em" viewBox="0 0 512 119"><defs><linearGradient id="IconifyId18cad61fe3533ba6d2" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1FAF38"/><stop offset="100%" stopColor="#60D669"/></linearGradient><linearGradient id="IconifyId18cad61fe3533ba6d3" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#F9F9F9"/><stop offset="100%" stopColor="#FFF"/></linearGradient></defs><path fill="#FFF" d="M500.137 72.067c-.318 1.605-.867 3.005-1.64 4.208a9.102 9.102 0 0 1-3.05 2.926c-1.252.75-2.816 1.125-4.686 1.125c-1.817 0-3.367-.376-4.649-1.125a8.971 8.971 0 0 1-3.087-2.926c-.77-1.203-1.335-2.603-1.683-4.208a23.029 23.029 0 0 1-.52-4.885c0-1.717.164-3.373.482-4.972c.32-1.604.87-3.02 1.643-4.255a9.354 9.354 0 0 1 3.046-3c1.252-.776 2.816-1.168 4.688-1.168c1.816 0 3.351.392 4.605 1.167a9.548 9.548 0 0 1 3.087 3.043c.805 1.257 1.38 2.689 1.725 4.29a22.83 22.83 0 0 1 .521 4.895c0 1.651-.162 3.284-.482 4.885m10.74-13.028c-.75-2.696-1.897-5.062-3.448-7.094c-1.55-2.03-3.496-3.662-5.848-4.889c-2.352-1.231-5.16-1.843-8.42-1.843c-2.56 0-4.913.505-7.049 1.521c-2.137 1.017-3.9 2.647-5.29 4.892h-.156v-5.294h-10.822v55.96h11.378v-19.64h.162c1.389 2.032 3.169 3.567 5.33 4.606c2.162 1.042 4.53 1.566 7.095 1.566c3.042 0 5.7-.592 7.974-1.765c2.267-1.174 4.168-2.753 5.688-4.732c1.526-1.978 2.657-4.247 3.406-6.812c.752-2.567 1.123-5.238 1.123-8.017c0-2.94-.371-5.757-1.123-8.459M454.78 72.067c-.324 1.605-.873 3.005-1.645 4.208a9.047 9.047 0 0 1-3.05 2.926c-1.252.75-2.817 1.125-4.686 1.125c-1.819 0-3.362-.376-4.645-1.125a8.949 8.949 0 0 1-3.087-2.926c-.775-1.203-1.335-2.603-1.683-4.208a22.912 22.912 0 0 1-.519-4.885c0-1.717.156-3.373.476-4.972c.325-1.604.87-3.02 1.647-4.255a9.278 9.278 0 0 1 3.047-3c1.253-.776 2.812-1.168 4.685-1.168c1.815 0 3.356.392 4.608 1.167a9.544 9.544 0 0 1 3.086 3.043c.8 1.257 1.374 2.689 1.722 4.29c.35 1.604.519 3.236.519 4.895a24.97 24.97 0 0 1-.475 4.885m7.29-20.122c-1.548-2.03-3.5-3.662-5.851-4.889c-2.353-1.231-5.155-1.843-8.413-1.843c-2.567 0-4.917.505-7.052 1.521c-2.143 1.017-3.9 2.647-5.289 4.892h-.163v-5.294h-10.823v55.96h11.388v-19.64h.154c1.388 2.032 3.17 3.567 5.335 4.606c2.159 1.042 4.525 1.566 7.09 1.566c3.047 0 5.703-.592 7.973-1.765c2.271-1.174 4.168-2.753 5.691-4.732c1.525-1.978 2.655-4.247 3.409-6.812a28.712 28.712 0 0 0 1.12-8.017c0-2.94-.378-5.757-1.12-8.459c-.754-2.696-1.9-5.062-3.45-7.094m-74.852 13.71l7.453-21.005h.159l7.214 21.005zm1.2-35.115L366.78 87.78h12.663l4.485-12.748h21.401l4.324 12.747h13.067L401.325 30.54zm-22.6 39.083a10.312 10.312 0 0 0-2.966-3.29c-1.228-.878-2.634-1.588-4.207-2.125a49.36 49.36 0 0 0-4.85-1.358a186.495 186.495 0 0 0-4.726-1.045c-1.55-.322-2.928-.682-4.13-1.08c-1.202-.402-2.173-.92-2.922-1.567c-.75-.64-1.121-1.466-1.121-2.483c0-.856.208-1.536.638-2.045a4.29 4.29 0 0 1 1.564-1.164a7.095 7.095 0 0 1 2.043-.52a19.964 19.964 0 0 1 2.083-.117c2.032 0 3.795.386 5.294 1.16c1.492.776 2.322 2.26 2.48 4.449h10.82c-.214-2.564-.868-4.687-1.964-6.375c-1.094-1.681-2.472-3.032-4.127-4.045c-1.653-1.016-3.538-1.736-5.652-2.165a32.744 32.744 0 0 0-6.526-.64c-2.248 0-4.44.2-6.572.597c-2.141.403-4.064 1.101-5.771 2.087a11.51 11.51 0 0 0-4.13 4.048c-1.044 1.71-1.564 3.904-1.564 6.574c0 1.817.377 3.356 1.126 4.61a9.69 9.69 0 0 0 2.959 3.126c1.232.828 2.636 1.499 4.211 2.003c1.576.513 3.192.95 4.846 1.326c4.065.856 7.232 1.708 9.5 2.567c2.271.853 3.406 2.135 3.406 3.847c0 1.015-.238 1.852-.72 2.522a5.452 5.452 0 0 1-1.803 1.604a8.502 8.502 0 0 1-2.404.88c-.882.19-1.726.284-2.527.284c-1.122 0-2.203-.135-3.242-.402c-1.045-.267-1.966-.682-2.767-1.243a6.617 6.617 0 0 1-1.965-2.165c-.504-.883-.764-1.934-.764-3.166H328.55c.11 2.779.735 5.092 1.887 6.935a13.683 13.683 0 0 0 4.406 4.45c1.789 1.12 3.835 1.924 6.134 2.406c2.294.48 4.646.72 7.046.72a35.6 35.6 0 0 0 6.936-.679c2.27-.455 4.288-1.244 6.051-2.369c1.767-1.12 3.19-2.603 4.289-4.448c1.092-1.846 1.64-4.13 1.64-6.856c0-1.927-.374-3.54-1.122-4.848m-47.042-35.715h-11.383v12.424h-6.889v7.615h6.89V78.4c0 2.087.35 3.769 1.043 5.05c.695 1.281 1.642 2.276 2.843 2.969c1.203.695 2.593 1.16 4.17 1.401a33.41 33.41 0 0 0 5.008.36c1.126 0 2.271-.028 3.449-.077a26.5 26.5 0 0 0 3.204-.324V78.96c-.536.109-1.096.192-1.686.24c-.586.055-1.2.084-1.842.084c-1.922 0-3.205-.324-3.848-.965c-.638-.64-.96-1.923-.96-3.848V53.947h8.336v-7.615h-8.335zm-32.619 37.835c0 .647-.065 1.502-.2 2.569c-.133 1.072-.494 2.123-1.081 3.166c-.589 1.042-1.5 1.94-2.725 2.685c-1.229.75-2.965 1.125-5.212 1.125c-.905 0-1.789-.08-2.643-.244c-.857-.158-1.602-.44-2.244-.84c-.64-.4-1.15-.949-1.524-1.644c-.371-.695-.56-1.547-.56-2.562c0-1.068.189-1.956.56-2.647a5.188 5.188 0 0 1 1.485-1.724c.612-.454 1.334-.814 2.163-1.084a20.56 20.56 0 0 1 2.525-.64a50.277 50.277 0 0 1 2.723-.401a35.366 35.366 0 0 0 2.605-.4a18.29 18.29 0 0 0 2.326-.604c.721-.24 1.32-.57 1.802-1zm11.38 6.817V56.997c0-2.516-.559-4.531-1.684-6.052c-1.12-1.525-2.563-2.713-4.324-3.568c-1.766-.855-3.718-1.43-5.854-1.724a46.43 46.43 0 0 0-6.33-.44c-2.296 0-4.582.225-6.85.681c-2.276.454-4.315 1.217-6.133 2.284a13.588 13.588 0 0 0-4.486 4.248c-1.18 1.764-1.846 3.982-2.006 6.655h11.38c.213-2.246.964-3.85 2.247-4.811c1.281-.963 3.042-1.441 5.289-1.441c1.013 0 1.96.067 2.844.2c.88.134 1.655.398 2.324.8c.67.401 1.203.96 1.602 1.685c.4.72.601 1.698.601 2.924c.053 1.18-.295 2.07-1.04 2.685c-.75.618-1.764 1.087-3.047 1.403c-1.282.324-2.752.565-4.41.72a93.299 93.299 0 0 0-5.046.645a47.77 47.77 0 0 0-5.088 1.083c-1.682.451-3.183 1.136-4.49 2.041c-1.31.913-2.378 2.127-3.209 3.651c-.826 1.524-1.24 3.463-1.24 5.812c0 2.137.36 3.98 1.082 5.529c.72 1.554 1.722 2.832 3.006 3.848c1.283 1.016 2.778 1.766 4.488 2.248c1.707.48 3.552.72 5.53.72c2.565 0 5.077-.375 7.53-1.12a14.866 14.866 0 0 0 6.416-3.931a16.371 16.371 0 0 0 .8 4.008h11.543c-.534-.85-.91-2.135-1.122-3.848a42.67 42.67 0 0 1-.323-5.372M250.652 49.9c-1.12-1.471-2.657-2.618-4.604-3.449c-1.953-.824-4.451-1.238-7.495-1.238c-2.138 0-4.327.546-6.574 1.644c-2.243 1.092-4.087 2.844-5.528 5.251h-.241V30.54h-11.38v57.24h11.38V66.053c0-4.221.694-7.252 2.084-9.1c1.388-1.841 3.632-2.764 6.732-2.764c2.724 0 4.621.841 5.69 2.527c1.07 1.682 1.603 4.235 1.603 7.654v23.408H253.7V62.287c0-2.564-.229-4.901-.682-7.016c-.454-2.108-1.242-3.9-2.366-5.372m-60.106 20.083h-.159L180.61 30.54h-11.78l-9.94 38.962h-.159l-9.056-38.962h-12.582l15.147 57.24h12.744l9.535-38.962h.16l9.698 38.961h12.503l15.388-57.239h-12.342z"/><path fill="url(#IconifyId18cad61fe3533ba6d2)" d="M2.517 58.721a56.571 56.571 0 0 0 7.568 28.334l-8.043 29.367l30.054-7.88a56.666 56.666 0 0 0 27.09 6.897h.025c31.243 0 56.677-25.424 56.69-56.673c.006-15.143-5.886-29.381-16.59-40.094C88.609 7.96 74.375 2.058 59.209 2.052c-31.248 0-56.679 25.422-56.692 56.67"/><path fill="url(#IconifyId18cad61fe3533ba6d3)" d="M.493 58.703a58.599 58.599 0 0 0 7.839 29.349L0 118.472l31.131-8.163a58.692 58.692 0 0 0 28.063 7.147h.025c32.364 0 58.71-26.339 58.725-58.706c.005-15.687-6.099-30.437-17.185-41.534C89.671 6.121 74.928.006 59.219 0C26.849 0 .506 26.334.493 58.703m18.54 27.816l-1.163-1.845a48.665 48.665 0 0 1-7.462-25.968c.01-26.903 21.906-48.79 48.83-48.79c13.037.005 25.29 5.087 34.507 14.309c9.216 9.223 14.287 21.482 14.283 34.521c-.012 26.904-21.907 48.795-48.81 48.795H59.2a48.76 48.76 0 0 1-24.844-6.802l-1.783-1.058l-18.473 4.844z"/><path fill="#FFF" d="M44.541 34.161c-1.1-2.443-2.256-2.492-3.301-2.535c-.856-.037-1.835-.034-2.812-.034c-.98 0-2.569.368-3.913 1.836c-1.345 1.468-5.136 5.017-5.136 12.237S34.637 59.86 35.37 60.84c.734.978 10.151 16.267 25.065 22.148c12.396 4.888 14.918 3.916 17.608 3.671c2.69-.244 8.682-3.548 9.904-6.975c1.223-3.426 1.223-6.363.856-6.976c-.366-.611-1.345-.979-2.812-1.712c-1.468-.734-8.682-4.284-10.026-4.774c-1.346-.489-2.324-.733-3.303.736c-.978 1.467-3.788 4.771-4.644 5.75c-.856.98-1.713 1.103-3.18.37c-1.468-.737-6.194-2.285-11.8-7.283c-4.362-3.89-7.307-8.692-8.163-10.161c-.856-1.468-.091-2.262.644-2.994c.66-.657 1.468-1.713 2.202-2.57c.732-.857.977-1.468 1.466-2.447c.49-.98.244-1.836-.122-2.57c-.367-.734-3.219-7.99-4.524-10.892"/></svg>
          </Link>
        </div>
          <div className="d-flex justify-content-center">
            <Scroll/>
          </div>
          <div className="d-flex justify-content-center">
            <GradientPage/>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <ColorExtractorS/>
          </div>
        <Footer/>
    </div>
  );
}

export default App;