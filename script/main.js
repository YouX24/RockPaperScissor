const rock = document.getElementById("rock-el");
const paper = document.getElementById("paper-el");
const scissor = document.getElementById("scissor-el");
const vsDisplay = document.getElementById("versus-display")
const result = document.getElementById("result-el")
let selection = ""
let compSelection = ""

rock.addEventListener("click", function() {
    selection = "rock"
    console.log(selection)
    computerSelect()
    compute()
})

paper.addEventListener("click", function() {
    selection = "paper"
    computerSelect()
    compute()
})

scissor.addEventListener("click", function() {
    selection = "scissor"
    computerSelect()
    compute()
})

function computerSelect() {
    let random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            compSelection = "rock"
            break
        case 1:
            compSelection = "paper"
            break
        case 2:
            compSelection = "scissor"
            break;
        default:
            break;
    }
}

function compute() {
    if (selection === "rock") {
        if (compSelection === "paper") {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/rock.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/paper.png" alt=""></div>'
            result.innerText = "YOU LOST"
        }
        else if (compSelection === "scissor") {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/rock.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/scissors.png" alt=""></div>'
            result.innerText = "YOU WIN!"
        }
        else {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/rock.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/rock.png" alt=""></div>'
            result.innerText = "IT'S A DRAW!"
        }
    }
    else if (selection === "paper") {
        if (compSelection === "scissor") {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/paper.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/scissors.png" alt=""></div>'
            result.innerText = "YOU LOST"
        }
        else if (compSelection === "rock") {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/paper.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/rock.png" alt=""></div>'
            result.innerText = "YOU WIN!"
        }
        else {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/paper.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/paper.png" alt=""></div>'
            result.innerText = "IT'S A DRAW!"
        }
    }
    else {
        if (compSelection === "rock") {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/scissors.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/rock.png" alt=""></div>'
            result.innerText = "YOU LOST"
        }
        else if (compSelection === "scissor") {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/scissors.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/paper.png" alt=""></div>'
            result.innerText = "YOU WIN!"
        }
        else {
            vsDisplay.innerHTML = '<div class="container2"><img src="images/scissors.png" alt=""></div><p class="versus">VS</p>'
            vsDisplay.innerHTML += '<div class="container2"><img src="images/scissors.png" alt=""></div>'
            result.innerText = "IT'S A DRAW!"
        }
    }
}

