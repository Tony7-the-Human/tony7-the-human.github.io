// $ - элементы страницы, которые есть node

let $start = document.querySelector('#start') // захват кнопки
let $game = document.querySelector('#game') // захват рабочей области с position:relative
let $timer = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $showResult = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTimeInput = document.querySelector('#game-time')
let $restartButton = document.querySelector('#restart')
let score = 0
let isGameStarted = false


$restartButton.addEventListener('click', restartGame)
$gameTimeInput.addEventListener('change', timerChanger)
$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)


function timerChanger() {
    if ($gameTimeInput.value >= 1) {
        $timer.textContent = parseFloat($gameTimeInput.value).toFixed(1)
    }
}

// начальные условия старта игры, задание стилей рабочей области
function startGame() {
    isGameStarted = true
    $start.classList.add('hide')
    $gameTimeInput.setAttribute('disabled', 'true')
    $game.style.backgroundColor = '#eaf2ff'

    let interval = setInterval(function() {
        time = parseFloat($timer.textContent)
        if (time <= 0) {
            clearInterval(interval) // чтобы не жрало память
            endGame()
        } else {
            $timer.textContent = (time - 0.1).toFixed(1) // toFixed - сколько знаков после запятой
        }
    }, 100)
    renderBox()
}

function endGame() {
    isGameStarted = false
    $gameTimeInput.setAttribute('disabled', 'false')
    if (isGameStarted === false) {
        $showResult.classList.remove('hide')
        $timeHeader.classList.add('hide')
        $result.textContent = score
        $restartButton.classList.remove('hide')
        $game.style.backgroundColor = '#b8bed0'
    }
}

function restartGame() {
    document.location.reload()
}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return console.log(score)
    }

    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

// создаем функцию для создания квадрата и его позиционарования в выбранной области
function renderBox() {
    $game.innerHTML = ''

    let box = document.createElement('div')
    let boxSize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect() // получаем объект DOMRect с размерами поля
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#' + getRandomColor()
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true') //добавляет атрибут к созданному div
    $game.insertAdjacentElement('afterbegin', box) //добавляет переданный эл-т в ДОМ-дерево; afterbegin - элемент начнется сразу после открывающего тега

}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
    if (!isGameStarted) {
        return
    } else {
        return (Math.random().toString(16) + 'FFFFF0').substring(2, 8).toUpperCase()
    }

}
