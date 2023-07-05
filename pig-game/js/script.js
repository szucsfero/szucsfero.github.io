"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions

let score, currentScore, activePlayer, playing;

const init = function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
};
init();

const switchPlayer = function () {
    // kapcsoljunk a következő játékoshoz
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Rolling dice function (kocka dobás funkció)
btnRoll.addEventListener("click", function () {
    if (playing === true) {
        // 1. random kocka generálást 1-6
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Képernyőre kiíratni az értékét
        diceEl.classList.remove("hidden");
        diceEl.src = `./img/dice-${dice}.png`;

        // 3. Vizsgálni az értéket 1-re következő játékosra ugrás
        if (dice !== 1) {
            // Adjuk a current számhoz az értékét
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing === true) {
        // 1. hozzáadjuk a current szám player score-hoz
        score[activePlayer] += currentScore;

        // score[] = score[] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent =
            score[activePlayer];

        // 2. Vizsgáljuk játékos pontjait  score >? 100
        if (score[activePlayer] >= 20) {
            playing = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            //kapcsoljuk át a játékost
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function () {
    init();
})