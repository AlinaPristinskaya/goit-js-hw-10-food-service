import './styles.css';
import gallery from './menu.json';
import galleryMenu from './template/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
bodyEl.classList.add(Theme.LIGHT);
const themeSwitch = document.querySelector('#theme-switch-toggle');

popTheme();
themeSwitch.addEventListener('change', onInputClick);
function onInputClick(e) {
  if (e.target.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  } else {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
  }

  localStorage.setItem('themeDark', bodyEl.classList);
}
function popTheme() {
  const theme = localStorage.getItem('themeDark');

  if (theme === 'dark-theme') {
    themeSwitch.checked = true;
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  }
}

const galleryRef = document.querySelector('.js-menu');

const galerryHTML = galleryMenu(gallery);

galleryRef.innerHTML = galerryHTML;
console.log(bodyEl.classList);
