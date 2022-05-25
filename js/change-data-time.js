let elemntPosition = 0
let currentTime = document.querySelectorAll('.card-data__current')
let previousTime = document.querySelectorAll('.card-data__previous')

export function changeDataTime(data, tabsName) {
  data.map(singleData => {

    switch(tabsName) {
      case 'Daily': 
        currentTime[elemntPosition].textContent = `${singleData.timeframes.daily.current}hrs`
        previousTime[elemntPosition].textContent = `Last Week - ${singleData.timeframes.daily.previous}hrs`
        break;
      case 'Weekly':
        currentTime[elemntPosition].textContent = `${singleData.timeframes.weekly.current}hrs`
        previousTime[elemntPosition].textContent = `Last Week - ${singleData.timeframes.weekly.previous}hrs`
        break;
      case 'Monthly':
        currentTime[elemntPosition].textContent = `${singleData.timeframes.monthly.current}hrs`
        previousTime[elemntPosition].textContent = `Last Week - ${singleData.timeframes.monthly.previous}hrs`
        break;
    }

    elemntPosition < 5 ? elemntPosition++ : elemntPosition = 0;
  })
}
