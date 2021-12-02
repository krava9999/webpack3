import video1 from './media/1.mp4'
import video2 from './media/2.mp4'

const items = [{
        title: `13 симфония Бетховена`,
        path: `${video1}`
    },
    {
        title: `Музыка для ...`,
        path: `${video2}`
    },


]

let app = document.querySelector('.app__items');
items.forEach((el) => {
    app.insertAdjacentHTML('beforeend', `
<div class="app__item">
<video controls src="${el.path}" class="app__video"></video>
<h3 class="app__item-heading">${el.title}</h3>
</div>

`)
})