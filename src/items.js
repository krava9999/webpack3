import item1 from "./img/1.jpg";
import item2 from "./img/2.jpg";
import item3 from "./img/3.jpg";
import item4 from "./img/4.gif";

const items = [{
        title: `title for item`,
        path: `${item1}`
    },
    {
        title: `title for item`,
        path: `${item2}`
    },
    {
        title: `title for item`,
        path: `${item3}`
    },
    {
        title: `title for item`,
        path: `${item4}`
    }
]

let app = document.querySelector('.app__items');
items.forEach((el) => {
    app.insertAdjacentHTML('beforeend', `
<div class="app__item">
            <img src="${el.path}" class= "app__item-img" alt="item photo">
            <h3 class="app__item-heading">${el.title}</h3>
</div>
    
`)
})