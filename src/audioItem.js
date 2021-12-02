import audio1 from './audio/1.mp3'
import audio2 from './audio/2.mp3'
import audio3 from './audio/3.mp3'

const items = [{
        title: `Музыка для ...`,
        path: `${audio1}`
    },
    {
        title: `Музыка для ...`,
        path: `${audio2}`
    },
    {
        title: `Музыка для ...`,
        path: `${audio3}`
    },

]

let app = document.querySelector('.app__items');
items.forEach((el) => {
    app.insertAdjacentHTML('beforeend', `
<div class="app__item">
<audio class="app__audio" controls src="${el.path}"></audio>

<h3 class="app__item-heading">${el.title}</h3>
</div>

`)
})