import data from '../data/menu.json';
import itemsTemplate from '../markup/markup.hbs';
import theme from './theme';

const refs = {
    menuList: document.querySelector('.js-menu'),
    body: document.body,
    switcher: document.querySelector('.theme-switch__toggle')
}

const markup = itemsTemplate(data);
refs.menuList.insertAdjacentHTML('beforeend', markup);
refs.switcher.checked = localStorage.getItem('theme') === theme.DARK;


const saveTheme = localStorage.getItem('theme') === null ? theme.LIGHT : localStorage.getItem('theme')
refs.body.classList.add(saveTheme);

const changeClass = (add, rem) => {
    refs.body.classList.remove(rem)
    refs.body.classList.add(add)
    localStorage.setItem('theme', add)
}

refs.switcher.addEventListener('change', ({ target }) => {
    if (target.checked) {
        changeClass(theme.DARK, theme.LIGHT);
        
    } else {
        changeClass(theme.LIGHT, theme.DARK);
    }
})