import {changeDataTime} from './change-data-time.js'

const allCardDots = document.querySelectorAll('.card-data__dots')
const tabs = document.getElementById('card-tabs')

tabs.addEventListener('click', (e) => {
  if(e.target.classList.contains('card-tabs__item')){
    const allChilds = Array.from(tabs.children)
    const tabsName = e.target.textContent

    allChilds.map(item => item.classList.remove('card-tabs__item--active'))
    e.target.classList.add('card-tabs__item--active')

    fetch('../data.json')
      .then(res => res.json())
      .then(data => {
        return changeDataTime(data, tabsName)
      })
  }
})
tabs.children[1].click()


Array.from(allCardDots).map(dotsItems => {

  dotsItems.addEventListener('mouseenter', (e) => {
    e.target.parentElement.style.backgroundColor = 'hsl(235, 46%, 20%)'
  })
  dotsItems.addEventListener('mouseleave', (e) => {
    e.target.parentElement.style.backgroundColor = ''
  })
})