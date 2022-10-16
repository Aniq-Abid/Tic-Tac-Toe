// -----------------------------------------------Get Elements
// Get Buttons
const singlePlayBtn = document.getElementById('singlePlayBtn');
const doublePlayBtn = document.getElementById('doublePlayBtn');
const easyBtn = document.getElementById('easyBtn');
const mediumBtn = document.getElementById('mediumBtn');
const hardBtn = document.getElementById('hardBtn');
const nextMatchBtn = document.getElementById('nextMatchBtn');
const matchEndBtn = document.getElementById('matchEnd');
const homeBtn = document.getElementById('homeBtn');
const replayBtn = document.getElementById('replayBtn');
// Get Screen  
const homeScreen = document.querySelector('.home_screen');
const difficultyScreen = document.querySelector('.difficulty_screen');
const playScreen = document.querySelector('.play_screen');
// Get Cell 
const cells = document.querySelectorAll('.cell');
const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');
// Get Other Element
const scoreBox1 = document.querySelector('.score_box1');
const scoreBox2 = document.querySelector('.score_box2');
const matchNumber = document.querySelector('.match_number');
const namePlate1 = document.querySelector('.name_plate1');
const namePlate2 = document.querySelector('.name_plate2');
const sign1 = document.querySelector('.sign1');
const sign2 = document.querySelector('.sign2');
const turnStatus = document.querySelector('.turn_status');
const matchComplete = document.querySelector('.match_complete');
const matchEnd = document.querySelector('.match_end');
const winnerName = document.querySelectorAll('.winner_name');
const player1wins = document.querySelector('.player1wins');
const player2wins = document.querySelector('.player2wins');
const drawText = document.querySelector('.draw');
const incompleteMatch = document.querySelector('.incomplete_match');
// -------------------------------------------------Variables 
let totalSign = 7;
let randomNumber = Math.ceil(Math.random() * totalSign);
let gameMode;
let player1Sign = "x" + randomNumber;
let player2Sign = "o" + randomNumber;
let player1Name = "Player1";
let player2Name = "Player2";
let opponentName = "CPU";
let pl2;
let difficulty;
let score1 = 0;
let score2 = 0;
let draw = 0;
let match = 1;
let turn;
let win = false;
let drawMatch = false;
let cpuTurnComplete = true;
let cpuStrategyOnRunning='';
// -----------------------------------------Add EventListeners
// Add EventListener on singlePlayBtn 
singlePlayBtn.addEventListener('click', () => {
    homeScreen.classList.add('hide')
    difficultyScreen.classList.remove('hide')
});
// Add EventListener on doublePlayBtn 
doublePlayBtn.addEventListener('click', () => {
    // player1Name=prompt("Enter Player 1 Name") 
    // player2Name=prompt("Enter Player 2 Name")
    homeScreen.classList.add('hide')
    playScreen.classList.remove('hide')
    gameMode = "double";
    Mode('');
});
// Add EventListener on easyBtn 
easyBtn.addEventListener('click', () => {
    difficultyScreen.classList.add('hide')
    playScreen.classList.remove('hide')
    Mode('easy');
});
// Add EventListener on mediumBtn 
mediumBtn.addEventListener('click', () => {
    difficultyScreen.classList.add('hide')
    playScreen.classList.remove('hide')
    Mode('medium');
});
// Add EventListener on hardBtn 
hardBtn.addEventListener('click', () => {
    difficultyScreen.classList.add('hide')
    playScreen.classList.remove('hide')
    Mode('hard');
});
// Add EventListener on nextMatchBtn 
nextMatchBtn.addEventListener('click', () => {
    nextMatchBtnClick()
});
// Add EventListener on matchEndBtn 
matchEndBtn.addEventListener('click', () => {
    matchEndBtnClick();
});
// Add EventListener on homeBtn 
homeBtn.addEventListener('click', () => {
    location.reload()
});
// Add EventListener on replayBtn 
replayBtn.addEventListener('click', () => {
    replayBtnClick()
});
// ---------Add EventListeners on cells 
// Add EventListener on cell1 
cell1.addEventListener('click', () => {
    if (cell1.children[0] == undefined) {
        cellClick(cell1);
        result()
    }
});
// Add EventListener on cell2 
cell2.addEventListener('click', () => {
    if (cell2.children[0] == undefined) {
        cellClick(cell2);
        result()
    }
});
// Add EventListener on cell3 
cell3.addEventListener('click', () => {
    if (cell3.children[0] == undefined) {
        cellClick(cell3);
        result()
    }
});
// Add EventListener on cell4 
cell4.addEventListener('click', () => {
    if (cell4.children[0] == undefined) {
        cellClick(cell4);
        result()
    }
});
// Add EventListener on cell5 
cell5.addEventListener('click', () => {
    if (cell5.children[0] == undefined) {
        cellClick(cell5);
        result()
    }
});
// Add EventListener on cell6 
cell6.addEventListener('click', () => {
    if (cell6.children[0] == undefined) {
        cellClick(cell6);
        result()
    }
});
// Add EventListener on cell7 
cell7.addEventListener('click', () => {
    if (cell7.children[0] == undefined) {
        cellClick(cell7);
        result()
    }
});
// Add EventListener on cell8 
cell8.addEventListener('click', () => {
    if (cell8.children[0] == undefined) {
        cellClick(cell8);
        result()
    }
});
// Add EventListener on cell9 
cell9.addEventListener('click', () => {
    if (cell9.children[0] == undefined) {
        cellClick(cell9);
        result()
    }
});
// this function check which game mode to run?
//easyMode medimMode etc..|call in starting buttons
function Mode(d) {
    switch (d) {
        // Single Player Easy Mode 
        case "easy":
            difficulty = 'easy';
            set(opponentName)
            cpuIntelligence();
            break;
        // Single Player Medium Mode 
        case "medium":
            difficulty = 'medium';
            set(opponentName)
            cpuIntelligence();
            break;
        // Single Player Hard Mode 
        case "hard":
            difficulty = 'hard';
            set(opponentName)
            cpuIntelligence();
            break;
        // Double Player Mode 
        default:
            set(player2Name);
            break;
    }
}
// set players Name Players Turn etc..| call in Mode function
function set(Pl2) {
    sign1.src = "images/" + player1Sign + ".png";
    sign2.src = "images/" + player2Sign + ".png";
    namePlate1.innerHTML = player1Name;
    namePlate2.innerHTML = Pl2;
    scoreBox1.innerHTML = `${player1Name} Wins<br><span class="score1">${score1}</span>`
    scoreBox2.innerHTML = `${Pl2} Wins<br><span class="score2">${score2}</span>`
    matchNumber.innerHTML = match;
    pl2 = Pl2;
    // Set First Turn 
    // if (Math.ceil(Math.random() * 2) == 1) {
    //     turn = "x"
    // } else {
    //     turn = "o"
    // }
    
    turn = "o"
    turn == 'x' ? turnStatus.innerHTML = `${player1Name}<img src="images/${player1Sign}.png">` : turnStatus.innerHTML = `${pl2}<img src="images/${player2Sign}.png">`;
}
// Cells Click Action | call in cells EventListener
function cellClick(cell) {
    if (gameMode == "double") {
        if (turn == "x") {
            cell.innerHTML = `<img src="images/${player1Sign}.png" data-src="${player1Sign}">`;
            turnStatus.innerHTML = `${pl2}<img src="images/${player2Sign}.png">`
            turn = "o";
        } else {
            cell.innerHTML = `<img src="images/${player2Sign}.png" data-src="${player2Sign}">`;
            turnStatus.innerHTML = `${player1Name}<img src="images/${player1Sign}.png">`
            turn = "x";
        }
    } 
    else {
        if (turn == "x") {
            cell.innerHTML = `<img src="images/${player1Sign}.png" data-src="${player1Sign}">`;
            turnStatus.innerHTML = `${pl2}<img src="images/${player2Sign}.png">`
            turn = "o";
        }
    }
    if (cpuTurnComplete) {
        setTimeout(() => {
            cpuIntelligence()
        }, 100);
    }
}
// Player 1 Win the execute this function |call in result function
function player1Win() {
    matchComplete.classList.remove('hide')
    score1++;
    winnerName[0].innerHTML = player1Name + " Win";
    set(pl2)
    win = true;
}
// Player 2/Cpu Win the execute this function |call in result function
function player2Win() {
    matchComplete.classList.remove('hide')
    score2++;
    if (gameMode == 'double') {
        winnerName[0].innerHTML = player2Name + " Win";
    } else {
        winnerName[0].innerHTML = opponentName + " Win";
    }
    set(pl2)
    win = true;
}
// Match Draw the execute this function |call in result function
function matchDraw() {
    matchComplete.classList.remove('hide')
    winnerName[0].innerHTML = "Draw";
    set(pl2)
    draw++;
    drawMatch = true;
}
// check who win | call this function in cells EventListener
function result() {
    /////////////////////// Player 1 Win 
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined) {
        if (cell1.children[0].dataset.src == player1Sign && cell2.children[0].dataset.src == player1Sign && cell3.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell4.children[0] != undefined && cell5.children[0] != undefined && cell6.children[0] != undefined) {
        if (cell4.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign && cell6.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell7.children[0] != undefined && cell8.children[0] != undefined && cell9.children[0] != undefined) {
        if (cell7.children[0].dataset.src == player1Sign && cell8.children[0].dataset.src == player1Sign && cell9.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell1.children[0] != undefined && cell5.children[0] != undefined && cell9.children[0] != undefined) {
        if (cell1.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign && cell9.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell3.children[0] != undefined && cell5.children[0] != undefined && cell7.children[0] != undefined) {
        if (cell3.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign && cell7.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell1.children[0] != undefined && cell4.children[0] != undefined && cell7.children[0] != undefined) {
        if (cell1.children[0].dataset.src == player1Sign && cell4.children[0].dataset.src == player1Sign && cell7.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell2.children[0] != undefined && cell5.children[0] != undefined && cell8.children[0] != undefined) {
        if (cell2.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign && cell8.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    // Player 1 Win 
    if (cell3.children[0] != undefined && cell6.children[0] != undefined && cell9.children[0] != undefined) {
        if (cell3.children[0].dataset.src == player1Sign && cell6.children[0].dataset.src == player1Sign && cell9.children[0].dataset.src == player1Sign) {
            player1Win();
        }
    }
    ///////////////////////////////////// Player 2 Wins
    // Player 2 Win 
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined) {
        if (cell1.children[0].dataset.src == player2Sign && cell2.children[0].dataset.src == player2Sign && cell3.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell4.children[0] != undefined && cell5.children[0] != undefined && cell6.children[0] != undefined) {
        if (cell4.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign && cell6.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell7.children[0] != undefined && cell8.children[0] != undefined && cell9.children[0] != undefined) {
        if (cell7.children[0].dataset.src == player2Sign && cell8.children[0].dataset.src == player2Sign && cell9.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell1.children[0] != undefined && cell5.children[0] != undefined && cell9.children[0] != undefined) {
        if (cell1.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign && cell9.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell3.children[0] != undefined && cell5.children[0] != undefined && cell7.children[0] != undefined) {
        if (cell3.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign && cell7.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell1.children[0] != undefined && cell4.children[0] != undefined && cell7.children[0] != undefined) {
        if (cell1.children[0].dataset.src == player2Sign && cell4.children[0].dataset.src == player2Sign && cell7.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell2.children[0] != undefined && cell5.children[0] != undefined && cell8.children[0] != undefined) {
        if (cell2.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign && cell8.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    // Player 2 Win 
    if (cell3.children[0] != undefined && cell6.children[0] != undefined && cell9.children[0] != undefined) {
        if (cell3.children[0].dataset.src == player2Sign && cell6.children[0].dataset.src == player2Sign && cell9.children[0].dataset.src == player2Sign) {
            player2Win();
        }
    }
    ////////////////////////////// Draw
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined && cell4.children[0] != undefined && cell5.children[0] != undefined && cell6.children[0] != undefined && cell7.children[0] != undefined && cell8.children[0] != undefined && cell9.children[0] != undefined) {
        if (!win) {
            matchDraw();
        }
    }
}
// next Match Button Click Action | call in nextMatchBtn EventListener
function nextMatchBtnClick() {
    matchComplete.classList.add('hide')
    match++;
    matchNumber.innerHTML = match;
    win = false;
    drawMatch = false;
    // set Turn 
    if (winnerName[0].innerHTML == player1Name + " Win") {
        turn = 'x'
        turnStatus.innerHTML = `${player1Name}<img src="images/${player1Sign}.png">`
    } else {
        turn = 'o'
        turnStatus.innerHTML = `${pl2}<img src="images/${player2Sign}.png">`
    }
    cells.forEach(function (cell) {
        cell.innerHTML = "";
    })
    cpuStrategyOnRunning='';
    cpuIntelligence()
}
// Match End Button Click Action | call in matchEndBtn EventListener
function matchEndBtnClick() {
    matchComplete.classList.add('hide')
    matchEnd.classList.remove('hide')
    player1wins.innerHTML = `${player1Name} Wins <span> ${score1}</span>`;
    if (gameMode == "double") {
        player2wins.innerHTML = `${player2Name} Wins <span> ${score2}</span>`;
    } else {
        player2wins.innerHTML = `${opponentName} Wins <span> ${score2}</span>`;
    }
    drawText.innerHTML = draw;
    if (!win && !drawMatch) {
        incompleteMatch.innerHTML = 1;
    }
    if (score1 > score2) {
        winnerName[1].innerHTML = player1Name + " Wins";
    } else if (score1 < score2) {
        if (gameMode == "double") {
            winnerName[1].innerHTML = player2Name + " Wins";
        } else {
            winnerName[1].innerHTML = opponentName + " Wins";
        }
    } else {
        winnerName[1].innerHTML = "Draw";
    }
    cpuStrategyOnRunning='';
}
// Replay Button Click Action | call in replayBtn EventListener
function replayBtnClick() {
    matchEnd.classList.add('hide');
    match = 1;
    score1 = 0;
    score2 = 0;
    incompleteMatch.innerHTML = 0;
    win = false;
    drawMatch = false;
    set(pl2)
    cells.forEach(function (cell) {
        cell.innerHTML = "";
    })
    cpuIntelligence()
}
// Key Controls 
window.addEventListener('keyup', (e) => {
    // Space Key Controls | press space 
    if (e.keyCode == 32) {
        // for Next Match Button 
        if (!matchComplete.classList.contains('hide')) {
            nextMatchBtnClick()
        }
        // for Replay Button 
        else if (!matchEnd.classList.contains('hide')) {
            replayBtnClick()
        }
        // for Replay Button 
        else if (!playScreen.classList.contains('hide')) {
            matchEndBtnClick()
        }
    }
    // Grid Controls | Cells Controls
    if (matchComplete.classList.contains('hide') && matchEnd.classList.contains('hide') && !playScreen.classList.contains('hide')) {
        // cell1 control
        if (e.keyCode == 36) {
            if (cell1.children[0] == undefined) {
                cellClick(cell1);
                result()
            }
        }
        // cell2 control
        if (e.keyCode == 38) {
            if (cell2.children[0] == undefined) {
                cellClick(cell2);
                result()
            }
        }
        // cell3 control
        if (e.keyCode == 33) {
            if (cell3.children[0] == undefined) {
                cellClick(cell3);
                result()
            }
        }
        // cell4 control
        if (e.keyCode == 37) {
            if (cell4.children[0] == undefined) {
                cellClick(cell4);
                result()
            }
        }
        // cell5 control
        if (e.keyCode == 12) {
            if (cell5.children[0] == undefined) {
                cellClick(cell5);
                result()
            }
        }
        // cell6 control
        if (e.keyCode == 39) {
            if (cell6.children[0] == undefined) {
                cellClick(cell6);
                result()
            }
        }
        // cell7 control
        if (e.keyCode == 35) {
            if (cell7.children[0] == undefined) {
                cellClick(cell7);
                result()
            }
        }
        // cell8 control
        if (e.keyCode == 40) {
            if (cell8.children[0] == undefined) {
                cellClick(cell8);
                result()
            }
        }
        // cell9 control
        if (e.keyCode == 34) {
            if (cell9.children[0] == undefined) {
                cellClick(cell9);
                result()
            }
        }
    }
});
// CPU Turn | CPU Intelligence
function cpuIntelligence() {
    if (gameMode != "double" && matchComplete.classList.contains('hide') && matchEnd.classList.contains('hide')) {
        if (turn == "o") {
            turnStatus.classList.add('cpuTurn');
            cpuTurnComplete = false;
            setTimeout(() => {
                if (difficulty == 'easy') {
                    CpuMoveRandamly()
                }
                // for difficulty Medium 
                if (difficulty == 'medium') {
                    cpuWinningMove()
                    cpuDefensiveMove()
                    CpuMoveRandamly()
                }
                // for difficulty Hard 
                if (difficulty == 'hard') {
                    cpuHardChoise();
                }
                turn = 'x'
                turnStatus.innerHTML = `${player1Name}<img src="images/${player1Sign}.png">`
                turnStatus.classList.remove('cpuTurn');
                result()
                cpuTurnComplete = true;
            }, 100);//1500
        }
    }
}
// Cpu Move Randamly 
function CpuMoveRandamly() {
    let randomMv = Math.floor(Math.random()*9+1);
    // Cell 1
    if (randomMv==1&&!cpuTurnComplete) {
        if (cell1.children[0]==undefined) {
            cpuPrint(cell1)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 2
    else if (randomMv==2&&!cpuTurnComplete) {
        if (cell2.children[0]==undefined) {
            cpuPrint(cell2)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 3
    else if (randomMv==3&&!cpuTurnComplete) {
        if (cell3.children[0]==undefined) {
            cpuPrint(cell3)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 4
    else if (randomMv==4&&!cpuTurnComplete) {
        if (cell4.children[0]==undefined) {
            cpuPrint(cell4)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 5
    else if (randomMv==5&&!cpuTurnComplete) {
        if (cell5.children[0]==undefined) {
            cpuPrint(cell5)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 6
    else if (randomMv==6&&!cpuTurnComplete) {
        if (cell6.children[0]==undefined) {
            cpuPrint(cell6)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 7
    else if (randomMv==7&&!cpuTurnComplete) {
        if (cell7.children[0]==undefined) {
            cpuPrint(cell7)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 8
    else if (randomMv==8&&!cpuTurnComplete) {
        if (cell8.children[0]==undefined) {
            cpuPrint(cell8)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
    // Cell 9
    else if (randomMv==9&&!cpuTurnComplete) {
        if (cell9.children[0]==undefined) {
            cpuPrint(cell9)
            cpuTurnComplete = true;
        }else{CpuMoveRandamly()}
    }
}
function cpuPrint(cell) {
    if (cell.children[0] == undefined) {
        cell.innerHTML = `<img src="images/${player2Sign}.png" data-src="${player2Sign}">`;
        turnStatus.innerHTML = `${player1Name}<img src="images/${player1Sign}.png">`
        turn = "x";
    }
}
// cpuHardChoise hard Mode Cpu Intelligence
function cpuHardChoise() {
    // CPU First Move Randomly 
    if (cell1.children[0] == undefined && cell2.children[0] == undefined && cell3.children[0] == undefined && cell4.children[0] == undefined && cell5.children[0] == undefined && cell6.children[0] == undefined && cell7.children[0] == undefined && cell8.children[0] == undefined && cell9.children[0] == undefined) {
        let cpuRandomChoise = Math.floor(Math.random() * 9 + 1 );
        // let cpuRandomChoise = 8;
        if (cpuRandomChoise == 1) {
            if (cell1.children[0] == undefined) {
                cpuPrint(cell1)
            }
        } else if (cpuRandomChoise == 2) {
            if (cell2.children[0] == undefined) {
                cpuPrint(cell2)
            }
        } else if (cpuRandomChoise == 3) {
            if (cell3.children[0] == undefined) {
                cpuPrint(cell3)
            }
        } else if (cpuRandomChoise == 4) {
            if (cell4.children[0] == undefined) {
                cpuPrint(cell4)
            }
        } else if (cpuRandomChoise == 5) {
            if (cell5.children[0] == undefined) {
                cpuPrint(cell5)
            }
        } else if (cpuRandomChoise == 6) {
            if (cell6.children[0] == undefined) {
                cpuPrint(cell6)
            }
        } else if (cpuRandomChoise == 7) {
            if (cell7.children[0] == undefined) {
                cpuPrint(cell7)
            }
        } else if (cpuRandomChoise == 8) {
            if (cell8.children[0] == undefined) {
                cpuPrint(cell8)
            }
        } else if (cpuRandomChoise == 9) {
            if (cell9.children[0] == undefined) {
                cpuPrint(cell9)
            }
        }
    }
    cpuWinningMove();
    cpuDefensiveMove();

    switch (cpuStrategyOnRunning) {
        // Strategy Selection
        case '':
            cpuStrategies()
            break;
        // -------------------Strategy 1
        // Strategy 1 Part 1 Selected
        case 'strategy1part1':
            cpuStrategy1Part1()
            break;
        // Strategy 1 Part 2 on Selected
        case 'strategy1part2':
            cpuStrategy1Part2()
            break;
        // Strategy 1 Part 3 on Selected
        case 'strategy1part3':
            cpuStrategy1Part3()
            break;
        // Strategy 1 Part 4 on Selected
        case 'strategy1part4':
            cpuStrategy1Part4()
            break;
        // Strategy 1 Part 5 on Selected
        case 'strategy1part5':
            cpuStrategy1Part5()
            break;
        // -------------------Strategy 2 
        // Strategy 2 Part 1 on Selected
        case 'strategy2part1':
            cpuStrategy2Part1()
            break;
        // Strategy 2 Part 2 on Selected
        case 'strategy2part2':
            cpuStrategy2Part2()
            break;
        // Strategy 2 Part 3 on Selected
        case 'strategy2part3':
            cpuStrategy2Part3()
            break;
        // Strategy 2 Part 4 on Selected
        case 'strategy2part4':
            cpuStrategy2Part4()
            break;
        // Strategy 2 Part 5 on Selected
        case 'strategy2part5':
            cpuStrategy2Part5()
            break;
        // Strategy 2 Part 6 on Selected
        case 'strategy2part6':
            cpuStrategy2Part6()
            break;
        // Strategy 2 Part 7 on Selected
        case 'strategy2part7':
            cpuStrategy2Part7()
            break;
        // Strategy 2 Part 8 on Selected
        case 'strategy2part8':
            cpuStrategy2Part8()
            break;
        // -------------------Strategy 3 
        // Strategy 3 Part 1 on Selected
        case 'strategy3part1':
            cpuStrategy3Part1()
            break;
        // Strategy 3 Part 2 on Selected
        case 'strategy3part2':
            cpuStrategy3Part2()
            break;
        // Strategy 3 Part 3 on Selected
        case 'strategy3part3':
            cpuStrategy3Part3()
            break;
        // Strategy 3 Part 4 on Selected
        case 'strategy3part4':
            cpuStrategy3Part4()
            break;
        // Strategy 3 Part 5 on Selected
        case 'strategy3part5':
            cpuStrategy3Part5()
            break;
        // Strategy 3 Part 6 on Selected
        case 'strategy3part6':
            cpuStrategy3Part6()
            break;
        // Strategy 3 Part 7 on Selected
        case 'strategy3part7':
            cpuStrategy3Part7()
            break;
        // Strategy 3 Part 8 on Selected
        case 'strategy3part8':
            cpuStrategy3Part8()
            break;
        // -------------------Strategy 4 
        // Strategy 4 Part 1 on Selected
        case 'strategy4part1':
            cpuStrategy4Part1()
            break;
        // Strategy 4 Part 2 on Selected
        case 'strategy4part2':
            cpuStrategy4Part2()
            break;
        // Strategy 4 Part 3 on Selected
        case 'strategy4part3':
            cpuStrategy4Part3()
            break;
        // Strategy 4 Part 4 on Selected
        case 'strategy4part4':
            cpuStrategy4Part4()
            break;
        // Strategy 4 Part 5 on Selected
        case 'strategy4part5':
            cpuStrategy4Part5()
            break;
        // Strategy 4 Part 6 on Selected
        case 'strategy4part6':
            cpuStrategy4Part6()
            break;
        // Strategy 4 Part 7 on Selected
        case 'strategy4part7':
            cpuStrategy4Part7()
            break;
        // Strategy 4 Part 8 on Selected
        case 'strategy4part8':
            cpuStrategy4Part8()
            break;
        // -------------------Strategy 5
        // Strategy 5 Part 1 on Selected
        case 'strategy5part1':
            cpuStrategy5Part1()
            break;
        // Strategy 5 Part 2 on Selected
        case 'strategy5part2':
            cpuStrategy5Part2()
            break;
        // Strategy 5 Part 3 on Selected
        case 'strategy5part3':
            cpuStrategy5Part3()
            break;
        // Strategy 5 Part 4 on Selected
        case 'strategy5part4':
            cpuStrategy5Part4()
            break;
        // Strategy 5 Part 5 on Selected
        case 'strategy5part5':
            cpuStrategy5Part5()
            break;
        // Strategy 5 Part 6 on Selected
        case 'strategy5part6':
            cpuStrategy5Part6()
            break;
        // Strategy 5 Part 7 on Selected
        case 'strategy5part7':
            cpuStrategy5Part7()
            break;
        // Strategy 5 Part 8 on Selected
        case 'strategy5part8':
            cpuStrategy5Part8()
            break;
        // -------------------Strategy 6
        // Strategy 6 Part 1 on Selected
        case 'strategy6part1':
            cpuStrategy6Part1()
            break;
        // Strategy 6 Part 2 on Selected
        case 'strategy6part2':
            cpuStrategy6Part2()
            break;
        // Strategy 6 Part 3 on Selected
        case 'strategy6part3':
            cpuStrategy6Part3()
            break;
        // Strategy 6 Part 4 on Selected
        case 'strategy6part4':
            cpuStrategy6Part4()
            break;
        // Strategy 6 Part 5 on Selected
        case 'strategy6part5':
            cpuStrategy6Part5()
            break;
        // Strategy 6 Part 6 on Selected
        case 'strategy6part6':
            cpuStrategy6Part6()
            break;
        // Strategy 6 Part 7 on Selected
        case 'strategy6part7':
            cpuStrategy6Part7()
            break;
        // Strategy 6 Part 8 on Selected
        case 'strategy6part8':
            cpuStrategy6Part8()
            break;
        // -------------------Strategy 7
        // Strategy 7 Part 1 on Selected
        case 'strategy7part1':
            cpuStrategy7Part1()
            break;
        // Strategy 7 Part 2 on Selected
        case 'strategy7part2':
            cpuStrategy7Part2()
            break;
        // Strategy 7 Part 3 on Selected
        case 'strategy7part3':
            cpuStrategy7Part3()
            break;
        // Strategy 7 Part 4 on Selected
        case 'strategy7part4':
            cpuStrategy7Part4()
            break;
        // Strategy 7 Part 5 on Selected
        case 'strategy7part5':
            cpuStrategy7Part5()
            break;
        // Strategy 7 Part 6 on Selected
        case 'strategy7part6':
            cpuStrategy7Part6()
            break;
        // Strategy 7 Part 7 on Selected
        case 'strategy7part7':
            cpuStrategy7Part7()
            break;
        // Strategy 7 Part 8 on Selected
        case 'strategy7part8':
            cpuStrategy7Part8()
            break;
        // -------------------Strategy 8
        // Strategy 8 Part 1 on Selected
        case 'strategy8part1':
            cpuStrategy8Part1()
            break;
        // Strategy 8 Part 2 on Selected
        case 'strategy8part2':
            cpuStrategy8Part2()
            break;
        // Strategy 8 Part 3 on Selected
        case 'strategy8part3':
            cpuStrategy8Part3()
            break;
        // Strategy 8 Part 4 on Selected
        case 'strategy8part4':
            cpuStrategy8Part4()
            break;
        // Strategy 8 Part 5 on Selected
        case 'strategy8part5':
            cpuStrategy8Part5()
            break;
        // Strategy 8 Part 6 on Selected
        case 'strategy8part6':
            cpuStrategy8Part6()
            break;
        // Strategy 8 Part 7 on Selected
        case 'strategy8part7':
            cpuStrategy8Part7()
            break;
        // Strategy 8 Part 8 on Selected
         case 'strategy8part8':
            cpuStrategy8Part8()
            break;
        // -------------------Strategy 9
        // Strategy 9 Part 1 on Selected
        case 'strategy9part1':
            cpuStrategy9Part1()
            break;
        // Strategy 9 Part 2 on Selected
        case 'strategy9part2':
            cpuStrategy9Part2()
            break;
        // Strategy 9 Part 3 on Selected
        case 'strategy9part3':
            cpuStrategy9Part3()
            break;
        // Strategy 9 Part 4 on Selected
        case 'strategy9part4':
            cpuStrategy9Part4()
            break;
        // Strategy 9 Part 5 on Selected
        case 'strategy9part5':
            cpuStrategy9Part5()
            break;
        // Strategy 9 Part 6 on Selected
        case 'strategy9part6':
            cpuStrategy9Part6()
            break;
        // Strategy 9 Part 7 on Selected
        case 'strategy9part7':
            cpuStrategy9Part7()
            break;
        // Strategy 9 Part 8 on Selected
        case 'strategy9part8':
            cpuStrategy9Part8()
            break;
        // -------------------|
    }
}

// Cpu Last Move And Win The Game
function cpuWinningMove() {
    // Action Situation 1 | cell 1 cell 2 => cell 3 →
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player2Sign && cell2.children[0].dataset.src == player2Sign) {
            if (cell3.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell3)
        }
    }
    // Action Situation 2 | cell 4 cell 5 => cell 6 →
    if (cell4.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell4.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell6.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell6)
        }
    }
    // Action Situation 3 | cell 7 cell 8 => cell 9 →
    if (cell7.children[0] != undefined && cell8.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player2Sign && cell8.children[0].dataset.src == player2Sign) {
            if (cell9.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell9)
        }
    }
    // Action Situation 4 | cell 1 cell 4 => cell 7 ↓
    if (cell1.children[0] != undefined && cell4.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player2Sign && cell4.children[0].dataset.src == player2Sign) {
            if (cell7.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell7)
        }
    }
    // Action Situation 5 | cell 2 cell 5 => cell 8 ↓
    if (cell2.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell2.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell8.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell8)
        }
    }
    // Action Situation 6 | cell 3 cell 6 => cell 9 ↓
    if (cell3.children[0] != undefined && cell6.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player2Sign && cell6.children[0].dataset.src == player2Sign) {
            if (cell9.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell9)
        }
    }
    // Action Situation 7 | cell 3 cell 2 => cell 1 ←
    if (cell3.children[0] != undefined && cell2.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player2Sign && cell2.children[0].dataset.src == player2Sign) {
            if (cell1.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell1)
        }
    }
    // Action Situation 8 | cell 6 cell 5 => cell 4 ←
    if (cell6.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell6.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell4.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell4)
        }
    }
    // Action Situation 9 | cell 9 cell 8 => cell 7 ←
    if (cell9.children[0] != undefined && cell8.children[0] != undefined && !cpuTurnComplete) {
        if (cell9.children[0].dataset.src == player2Sign && cell8.children[0].dataset.src == player2Sign) {
            if (cell7.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell7)
        }
    }
    // Action Situation 10 | cell 7 cell 4 => cell 1 ↑
    if (cell7.children[0] != undefined && cell4.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player2Sign && cell4.children[0].dataset.src == player2Sign) {
            if (cell1.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell1)
        }
    }
    // Action Situation 11 | cell 8 cell 5 => cell 2 ↑
    if (cell8.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell8.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell2.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell2)
        }
    }
    // Action Situation 12 | cell 9 cell 6 => cell 3 ↑
    if (cell9.children[0] != undefined && cell6.children[0] != undefined && !cpuTurnComplete) {
        if (cell9.children[0].dataset.src == player2Sign && cell6.children[0].dataset.src == player2Sign) {
            if (cell3.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell3)
        }
    }
    // Action Situation 13 | cell 1 cell 5 => cell 9 ↘
    if (cell1.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell9.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell9)
        }
    }
    // Action Situation 14 | cell 3 cell 5 => cell 7 ↙
    if (cell3.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell7.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell7)
        }
    }
    // Action Situation 15 | cell 9 cell 5 => cell 1 ↖
    if (cell9.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell9.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell1.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell1)
        }
    }
    // Action Situation 16 | cell 7 cell 5 => cell 3 ↗
    if (cell7.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player2Sign && cell5.children[0].dataset.src == player2Sign) {
            if (cell3.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell3)
        }
    }
    // Between 
    // Action Situation 17 | cell 1 cell 3 => cell 2 ↔
    if (cell1.children[0] != undefined && cell3.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player2Sign && cell3.children[0].dataset.src == player2Sign) {
            if (cell2.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell2)
        }
    }
    // Action Situation 18 | cell 4 cell 6 => cell 5 ↔
    if (cell4.children[0] != undefined && cell6.children[0] != undefined && !cpuTurnComplete) {
        if (cell4.children[0].dataset.src == player2Sign && cell6.children[0].dataset.src == player2Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
    // Action Situation 19 | cell 7 cell 9 => cell 8 ↔
    if (cell7.children[0] != undefined && cell9.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player2Sign && cell9.children[0].dataset.src == player2Sign) {
            if (cell8.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell8)
        }
    }
    // Action Situation 20 | cell 1 cell 7 => cell 4 ↕
    if (cell1.children[0] != undefined && cell7.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player2Sign && cell7.children[0].dataset.src == player2Sign) {
            if (cell4.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell4)
        }
    }
    // Action Situation 21 | cell 2 cell 8 => cell 5 ↕
    if (cell2.children[0] != undefined && cell8.children[0] != undefined && !cpuTurnComplete) {
        if (cell2.children[0].dataset.src == player2Sign && cell8.children[0].dataset.src == player2Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
    // Action Situation 22 | cell 3 cell 9 => cell 6 ↕
    if (cell3.children[0] != undefined && cell9.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player2Sign && cell9.children[0].dataset.src == player2Sign) {
            if (cell6.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell6)
        }
    }
    // Action Situation 23 | cell 1 cell 9 => cell 5 ⇘ 
    if (cell1.children[0] != undefined && cell9.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player2Sign && cell9.children[0].dataset.src == player2Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
    // Action Situation 24 | cell 3 cell 7 => cell 5 ⇗
    if (cell3.children[0] != undefined && cell7.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player2Sign && cell7.children[0].dataset.src == player2Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
}
// Cpu DefensiveMove 
function cpuDefensiveMove() {
    // Defence Situation 1 | cell 1 cell 2 =>cell 3 →
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player1Sign && cell2.children[0].dataset.src == player1Sign) {
            if (cell3.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell3)
        }
    }
    // Defence Situation 2 | cell 4 cell 5 =>cell 6 →
    if (cell4.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell4.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell6.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell6)
        }
    }
    // Defence Situation 3 | cell 7 cell 8 =>cell 9 →
    if (cell7.children[0] != undefined && cell8.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player1Sign && cell8.children[0].dataset.src == player1Sign) {
            if (cell9.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell9)
        }
    }
    // Defence Situation 4 | cell 1 cell 4 =>cell 7 ↓
    if (cell1.children[0] != undefined && cell4.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player1Sign && cell4.children[0].dataset.src == player1Sign) {
            if (cell7.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell7)
        }
    }
    // Defence Situation 5 | cell 2 cell 5 =>cell 8 ↓
    if (cell2.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell2.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell8.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell8)
        }
    }
    // Defence Situation 6 | cell 3 cell 6 =>cell 9 ↓
    if (cell3.children[0] != undefined && cell6.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player1Sign && cell6.children[0].dataset.src == player1Sign) {
            if (cell9.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell9)
        }
    }
    // Defence Situation 7 | cell 3 cell 2 => cell 1 ←
    if (cell3.children[0] != undefined && cell2.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player1Sign && cell2.children[0].dataset.src == player1Sign) {
            if (cell1.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell1)
        }
    }
    // Defence Situation 8 | cell 6 cell 5 => cell 4 ←
    if (cell6.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell6.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell4.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell4)
        }
    }
    // Defence Situation 9 | cell 9 cell 8 => cell 7 ←
    if (cell9.children[0] != undefined && cell8.children[0] != undefined && !cpuTurnComplete) {
        if (cell9.children[0].dataset.src == player1Sign && cell8.children[0].dataset.src == player1Sign) {
            if (cell7.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell7)
        }
    }
    // Defence Situation 10 | cell 7 cell 4 => cell 1 ↑
    if (cell7.children[0] != undefined && cell4.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player1Sign && cell4.children[0].dataset.src == player1Sign) {
            if (cell1.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell1)
        }
    }
    // Defence Situation 11 | cell 8 cell 5 => cell 2 ↑
    if (cell8.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell8.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell2.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell2)
        }
    }
    // Defence Situation 12 | cell 9 cell 6 => cell 3 ↑
    if (cell9.children[0] != undefined && cell6.children[0] != undefined && !cpuTurnComplete) {
        if (cell9.children[0].dataset.src == player1Sign && cell6.children[0].dataset.src == player1Sign) {
            if (cell3.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell3)
        }
    }
    // Defence Situation 13 | cell 1 cell 5 => cell 9 ↘
    if (cell1.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell9.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell9)
        }
    }
    // Defence Situation 14 | cell 3 cell 5 => cell 7 ↙
    if (cell3.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell7.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell7)
        }
    }
    // Defence Situation 15 | cell 7 cell 5 => cell 3 ↗
    if (cell7.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell3.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell3)
        }
    }
    // Defence Situation 16 | cell 9 cell 5 => cell 1 ↖
    if (cell9.children[0] != undefined && cell5.children[0] != undefined && !cpuTurnComplete) {
        if (cell9.children[0].dataset.src == player1Sign && cell5.children[0].dataset.src == player1Sign) {
            if (cell1.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell1)
        }
    }
    // between
    // Defence Situation 17 | cell 1 cell 3 => cell 2 ↔
    if (cell1.children[0] != undefined && cell3.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player1Sign && cell3.children[0].dataset.src == player1Sign) {
            if (cell2.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell2)
        }
    }
    // Defence Situation 18 | cell 4 cell 6 => cell 5 ↔
    if (cell4.children[0] != undefined && cell6.children[0] != undefined && !cpuTurnComplete) {
        if (cell4.children[0].dataset.src == player1Sign && cell6.children[0].dataset.src == player1Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
    // Defence Situation 19 | cell 7 cell 9 => cell 8 ↔
    if (cell7.children[0] != undefined && cell9.children[0] != undefined && !cpuTurnComplete) {
        if (cell7.children[0].dataset.src == player1Sign && cell9.children[0].dataset.src == player1Sign) {
            if (cell8.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell8)
        }
    }
    // Defence Situation 20 | cell 1 cell 7 => cell 4 ↕
    if (cell1.children[0] != undefined && cell7.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player1Sign && cell7.children[0].dataset.src == player1Sign) {
            if (cell4.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell4)
        }
    }
    // Defence Situation 21 | cell 2 cell 8 => cell 5 ↕
    if (cell2.children[0] != undefined && cell8.children[0] != undefined && !cpuTurnComplete) {
        if (cell2.children[0].dataset.src == player1Sign && cell8.children[0].dataset.src == player1Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
    // Defence Situation 22 | cell 3 cell 9 => cell 6 ↕
    if (cell3.children[0] != undefined && cell9.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player1Sign && cell9.children[0].dataset.src == player1Sign) {
            if (cell6.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell6)
        }
    }
    // Defence Situation 23 | cell 1 cell 9 => cell 5 ⇘
    if (cell1.children[0] != undefined && cell9.children[0] != undefined && !cpuTurnComplete) {
        if (cell1.children[0].dataset.src == player1Sign && cell9.children[0].dataset.src == player1Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
    // Defence Situation 24 | cell 3 cell 7 => cell 5 ⇗
    if (cell3.children[0] != undefined && cell7.children[0] != undefined && !cpuTurnComplete) {
        if (cell3.children[0].dataset.src == player1Sign && cell7.children[0].dataset.src == player1Sign) {
            if (cell5.children[0] == undefined) {
                cpuTurnComplete = true;
            }
            cpuPrint(cell5)
        }
    }
}
// CPU Move Game Last Move 
function cpuLastMove() {
    // last move in  cell1 
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // last move in  cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // last move in  cell3
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // last move in  cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // last move in  cell5
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // last move in  cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // last move in  cell7
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // last move in  cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // last move in  cell9 
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
}
// Cpu Hard Strategies 
function cpuStrategies() {
    // Cpu Strategy 1 | Cpu 'First' move in center cell5
    if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player2Sign) {
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part1()
        }
        // if player 1 move cell6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part2()
        }
        // if player 1 move cell8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part3()
        }
        // if player 1 move cell4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part4()
        }
        // if player 1 move cell1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part5()
        }
        // if player 1 move cell3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part5()
        }
        // if player 1 move cell7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy1Part5()
        }
        // if player 1 move cell9
        if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy1Part5()
        }
    }
    // Cpu Strategy 2 | Cpu 'First' move in top left cell1
    if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player2Sign){
        // part 1 pl1 move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part1()
        }
        // part 2 pl1 move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part2()
        }
        // part 3 pl1 move in cell 4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part3()
        }
        // part 4 pl1 move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part4()
        }
        // part 5 pl1 move in cell 6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part5()
        }
        // part 6 pl1 move in cell 7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part6()
        }
        // part 7 pl1 move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy2Part7()
        }
        // part 8 pl1 move in cell 9
        if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy2Part8()
        }
    }
    // Cpu Strategy 3 | Cpu 'First' move in top cell2
    if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part1()
        }
        // part 2 pl1 first move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part2()
        }
        // part 3 pl1 first move in cell 4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part3()
        }
        // part 4 pl1 first move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part4()
        }
        // part 5 pl1 first move in cell 6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part5()
        }
        // part 6 pl1 first move in cell 7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part6()
        }
        // part 7 pl1 first move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy3Part7()
        }
        // part 8 pl1 first move in cell 9
        if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy3Part8()
        }
    }
    // Cpu Strategy 4 | Cpu 'First' move in top right cell3
    if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part1()
        }
        // part 2 pl1 first move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part2()
        }
        // part 3 pl1 first move in cell 4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part3()
        }
        // part 4 pl1 first move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part4()
        }
        // part 5 pl1 first move in cell 6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part5()
        }
        // part 6 pl1 first move in cell 7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part6()
        }
        // part 7 pl1 first move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy4Part7()
        }
        // part 8 pl1 first move in cell 9
        if (cell9.children[0]!=undefined&&cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy4Part8()
        }
    }
    // Cpu Strategy 5 | Cpu 'First' move in left cell4
    if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part1()
        }
        // part 2 pl1 first move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part2()
        }
        // part 3 pl1 first move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part3()
        }
        // part 4 pl1 first move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part4()
        }
        // part 5 pl1 first move in cell 6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part5()
        }
        // part 6 pl1 first move in cell 7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part6()
        }
        // part 6 pl1 first move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy5Part7()
        }
        // part 6 pl1 first move in cell 9
        if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy5Part8()
        }
    }
    // Cpu Strategy 6 | Cpu 'First' move in right cell6
    if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part1()
        }
        // part 2 pl1 first move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part2()
        }
        // part 3 pl1 first move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part3()
        }
        // part 4 pl1 first move in cell 4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part4()
        }
        // part 5 pl1 first move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part5()
        }
        // part 6 pl1 first move in cell 7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part6()
        }
        // part 7 pl1 first move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy6Part7()
        }
        // part 8 pl1 first move in cell 9
        if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy6Part8()
        }
    }
    // Cpu Strategy 7 | Cpu 'First' move in right cell7
    if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part1()
        }
        // part 2 pl1 first move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part2()
        }
        // part 3 pl1 first move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part3()
        }
        // part 4 pl1 first move in cell 4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part4()
        }
        // part 5 pl1 first move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part5()
        }
        // part 6 pl1 first move in cell 6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part6()
        }
        // part 7 pl1 first move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy7Part7()
        }
        // part 8 pl1 first move in cell 9
        if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy7Part8()
        }
    }
    // Cpu Strategy 8 | Cpu 'First' move in bottom cell8
    if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part1()
        }
        // part 2 pl1 first move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part2()
        }
        // part 3 pl1 first move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part3()
        }
        // part 4 pl1 first move in cell 4
        if (cell4.children[0]!=undefined && cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part4()
        }
        // part 5 pl1 first move in cell 5
        if (cell5.children[0]!=undefined && cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part5()
        }
        // part 6 pl1 first move in cell 6
        if (cell6.children[0]!=undefined && cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part6()
        }
        // part 6 pl1 first move in cell 7
        if (cell7.children[0]!=undefined && cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell9.children[0]==undefined) {
            cpuStrategy8Part7()
        }
        // part 6 pl1 first move in cell 9
        if (cell9.children[0]!=undefined && cell9.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined) {
            cpuStrategy8Part8()
        }
    }
    // Cpu Strategy 9 | Cpu 'First' move in bottom cell9
    if (cell9.children[0]!=undefined &&cell9.children[0].dataset.src==player2Sign){
        // part 1 pl1 first move in cell 1
        if (cell1.children[0]!=undefined &&cell1.children[0].dataset.src==player1Sign&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part1()
        }
        // part 2 pl2 first move in cell 2
        if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part2()
        }
        // part 3 pl3 first move in cell 3
        if (cell3.children[0]!=undefined &&cell3.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part3()
        }
        // part 4 pl4 first move in cell 4
        if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part4()
        }
        // part 5 pl5 first move in cell 5
        if (cell5.children[0]!=undefined &&cell5.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part5()
        }
        // part 6 pl6 first move in cell 6
        if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part6()
        }
        // part 7 pl6 first move in cell 7
        if (cell7.children[0]!=undefined &&cell7.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined) {
            cpuStrategy9Part7()
        }
        // part 8 pl6 first move in cell 8
        if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign&&cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined) {
            cpuStrategy9Part8()
        }
        
    }
    // ----------------------------------------------------------------------------|
}
// ---------------------------------------------------------------------------------------|
// // Strategy1 part1 | cpu first move in cell5 and pl1 move in cell2 execute this function
function cpuStrategy1Part1() {
    if (cell2.children[0]!=undefined &&cell2.children[0].dataset.src==player1Sign) {
        // Strategy Step 1 
        if (cell1.children[0]==undefined&&cell3.children[0]==undefined && !cpuTurnComplete) {
            let randomMv = Math.floor(Math.random()*2+1);
            if (randomMv==1) {
                cpuPrint(cell1)
            }else{
                cpuPrint(cell3)
            }
            cpuTurnComplete = true;
        }
        // Strategy Step 2 
        if (cell1.children[0]!=undefined&&cell3.children[0]==undefined && !cpuTurnComplete) {
            if (cell7.children[0]==undefined) {
                cpuPrint(cell7)
                cpuTurnComplete = true;
            }
        }
        // Strategy Step 3 
        if (cell1.children[0]==undefined&&cell3.children[0]!=undefined && !cpuTurnComplete) {
            if (cell9.children[0]==undefined) {
                cpuPrint(cell9)
                cpuTurnComplete = true;
            }
        }
        cpuStrategyOnRunning='strategy1part1';
    }
}
// // Strategy1 part2 | cpu first move in cell5 and pl1 move in cell6 execute this function
function cpuStrategy1Part2() {
    if (cell6.children[0]!=undefined &&cell6.children[0].dataset.src==player1Sign) {
        // Strategy Step 1 
        if (cell3.children[0]==undefined&&cell9.children[0]==undefined && !cpuTurnComplete) {
            let randomMv = Math.floor(Math.random()*2+1);
            if (randomMv==1) {
                cpuPrint(cell3)
            }else{
                cpuPrint(cell9)
            }
            cpuTurnComplete = true;
        }
        // Strategy Step 2 
        if (cell3.children[0]!=undefined&&cell9.children[0]==undefined && !cpuTurnComplete) {
            if (cell1.children[0]==undefined) {
                cpuPrint(cell1)
                cpuTurnComplete = true;
            }
        }
        // Strategy Step 3 
        if (cell3.children[0]==undefined&&cell9.children[0]!=undefined && !cpuTurnComplete) {
            if (cell7.children[0]==undefined) {
                cpuPrint(cell7)
                cpuTurnComplete = true;
            }
        }
        cpuStrategyOnRunning='strategy1part2';
    }
}
// // Strategy1 part3 | cpu first move in cell5 and pl1 move in cell8 execute this function
function cpuStrategy1Part3() {
    if (cell8.children[0]!=undefined &&cell8.children[0].dataset.src==player1Sign) {
        // Strategy Step 1 
        if (cell7.children[0]==undefined&&cell9.children[0]==undefined && !cpuTurnComplete) {
            let randomMv = Math.floor(Math.random()*2+1);
            if (randomMv==1) {
                cpuPrint(cell7)
            }else{
                cpuPrint(cell9)
            }
            cpuTurnComplete = true;
        }
        // Strategy Step 2 
        if (cell7.children[0]!=undefined&&cell9.children[0]==undefined && !cpuTurnComplete) {
            if (cell1.children[0]==undefined) {
                cpuPrint(cell1)
                cpuTurnComplete = true;
            }
        }
        // Strategy Step 3 
        if (cell3.children[0]==undefined&&cell9.children[0]!=undefined && !cpuTurnComplete) {
            if (cell3.children[0]==undefined) {
                cpuPrint(cell3)
                cpuTurnComplete = true;
            }
        }
        cpuStrategyOnRunning='strategy1part3';
    }
}
// // Strategy1 part4 | cpu first move in cell5 and pl1 move in cell4 execute this function
function cpuStrategy1Part4() {
    if (cell4.children[0]!=undefined &&cell4.children[0].dataset.src==player1Sign) {
        // Strategy Step 1 
        if (cell1.children[0]==undefined&&cell7.children[0]==undefined && !cpuTurnComplete) {
            let randomMv = Math.floor(Math.random()*2+1);
            if (randomMv==1) {
                cpuPrint(cell1)
            }else{
                cpuPrint(cell7)
            }
            cpuTurnComplete = true;
        }
        // Strategy Step 2 
        if (cell1.children[0]!=undefined&&cell7.children[0]==undefined && !cpuTurnComplete) {
            if (cell3.children[0]==undefined) {
                cpuPrint(cell3)
                cpuTurnComplete = true;
            }
        }
        // Strategy Step 3 
        if (cell1.children[0]==undefined&&cell7.children[0]!=undefined && !cpuTurnComplete) {
            if (cell9.children[0]==undefined) {
                cpuPrint(cell9)
                cpuTurnComplete = true;
            }
        }
        cpuStrategyOnRunning='strategy1part4';
    }
}
// // Strategy1 part5 | cpu first move in cell5 and pl1 move in cell1 Or cell3 Or cell7 Or cell9 execute this function
function cpuStrategy1Part5() {
    CpuMoveRandamly()
    cpuStrategyOnRunning='strategy1part5';
}
// -------------Strategy 2 
// // Strategy2 part1 | cpu first move in cell1 and pl1 move in cell2 execute this function
function cpuStrategy2Part1() {
    // Step 1
    if (cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // step2 
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // step 3
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined && cell4.children[0] == undefined && cell5.children[0] != undefined && cell6.children[0] != undefined && cell7.children[0] != undefined && cell8.children[0] != undefined && cell9.children[0] != undefined) {
        cpuPrint(cell4)
    }
    // step 4
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] == undefined && cell4.children[0] != undefined && cell5.children[0] != undefined && cell6.children[0] != undefined && cell7.children[0] == undefined && cell8.children[0] != undefined && cell9.children[0] == undefined) {
        cpuPrint(cell9)
    }
    // step 5
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] == undefined && cell4.children[0] == undefined && cell5.children[0] != undefined && cell6.children[0] != undefined && cell7.children[0] == undefined && cell8.children[0] != undefined && cell9.children[0] != undefined) {
        cpuPrint(cell4)
    }
    // step 6
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined && cell4.children[0] == undefined && cell5.children[0] == undefined && cell6.children[0] != undefined && cell7.children[0] == undefined && cell8.children[0] == undefined && cell9.children[0] == undefined) {
        cpuPrint(cell8)
    }
    // step 7
    if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined && cell4.children[0] == undefined && cell5.children[0] == undefined && cell6.children[0] != undefined && cell7.children[0] == undefined && cell8.children[0] != undefined && cell9.children[0] != undefined) {
        cpuPrint(cell4)
    }
     // step 7
     if (cell1.children[0] != undefined && cell2.children[0] != undefined && cell3.children[0] != undefined && cell4.children[0] != undefined && cell5.children[0] == undefined && cell6.children[0] != undefined && cell7.children[0] == undefined && cell8.children[0] != undefined && cell9.children[0] == undefined) {
        cpuPrint(cell9)
    }
    cpuStrategyOnRunning='strategy2part1';
}
// // Strategy2 part2 | cpu first move in cell1 and pl1 move in cell3 execute this function
function cpuStrategy2Part2() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy2part2';
}
// // Strategy2 part3 | cpu first move in cell1 and pl1 move in cell4 execute this function
function cpuStrategy2Part3() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 move second turn in cell2
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)            
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move second turn in cell3
    if (cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)            
        cpuTurnComplete = true;
    }
    // Step 4 pl1 move Third turn in cell2
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)            
        cpuTurnComplete = true;
    }
    // Step 5 cpu last move in cell2 | step 4 part 
    cpuLastMove()
    // Step 6 pl1 move Third turn in cell9
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)            
        cpuTurnComplete = true;
    }
    // Step 7 pl1 move second turn in cell7
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)            
        cpuTurnComplete = true;
    }
    // Step 8 pl1 move second turn in cell9
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)            
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy2part3';
}
// // Strategy2 part4 | cpu first move in cell1 and pl1 move in cell5 execute this function
function cpuStrategy2Part4() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    
    cpuStrategyOnRunning='strategy2part4';
}
// // Strategy2 part5 | cpu first move in cell1 and pl1 move in cell6 execute this function
function cpuStrategy2Part5() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 move second turn in cell2
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 3 cpu Last Move in cell9
    cpuLastMove()
    // Step 4 pl1 move second turn in cell7
    if (cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy2part5';
}
// // Strategy2 part6 | cpu first move in cell1 and pl1 move in cell7 execute this function
function cpuStrategy2Part6() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 move second turn in cell2
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move second turn in cell4
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move second turn in cell9
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4 )
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move second turn in cell9
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy2part6';
}
// // Strategy2 part7 | cpu first move in cell1 and pl1 move in cell8 execute this function
function cpuStrategy2Part7() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 move second turn in cell3
    if (cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move second turn in cell4
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move Third turn in cell4
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy2part7';
}
// // Strategy2 part8 | cpu first move in cell1 and pl1 move in cell9 execute this function
function cpuStrategy2Part8() {
    // Step 1
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 move second turn in cell2
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 move second turn in cell3 & third turn in cell4
    if (cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        let randomMv = Math.floor(Math.random()*2+1);
        if (randomMv==1) {
            cpuPrint(cell2)
        }else{
            cpuPrint(cell8)
        }
        cpuTurnComplete = true;
    }
    // Step 4 pl1 move second turn in cell4
    if (cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 5 pl1 move second turn in cell7 & third turn in cell2
    if (cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        let randomMv = Math.floor(Math.random()*2+1);
        if (randomMv==1) {
            cpuPrint(cell4)
        }else{
            cpuPrint(cell6)
        }
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy2part8';
}
// -------------Strategy 3 
// // Strategy3 part1 | cpu first move in cell2 and pl1 move in cell1 execute this function
function cpuStrategy3Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 first Move in cell1 & pl1 second Move in cell3
    if (cell1.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 first Move in cell1 & pl1 second Move in cell4
    if (cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined||cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 4 
    // condition pl1 first Move in cell1 & pl1 second Move in cell5 & pl1 third Move in cell8
    let condition1=cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete;
    // condition pl1 first Move in cell1 & pl1 second Move in cell8
    let condition2=cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete;
    if (condition1||condition2) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    
    cpuStrategyOnRunning='strategy3part1';
}
// // Strategy3 part2 | cpu first move in cell2 and pl1 move in cell3 execute this function
function cpuStrategy3Part2() {
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 first Move in cell3 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 3 
        // condition pl1 first Move in cell3 & pl1 second move in cell4
        let condition1 =cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete;
        // condition pl1 first Move in cell3 & pl1 second move in cell6
        let condition2 =cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete;
    if (condition1||condition2) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 4 
        // condition pl1 first Move in cell3 & pl1 second move in cell5 & pl1 third move in cell8  
        let condition3=cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete;
        // condition pl1 first Move in cell3 & pl1 second move in cell8
        let condition4=cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete;
    if (condition3||condition4) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    
    
    cpuStrategyOnRunning='strategy3part2';
}
// // Strategy3 part3 | cpu first move in cell2 and pl1 move in cell4 execute this function
function cpuStrategy3Part3() {
    // Step 1 pl1 first Move in cell4
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 first Move in cell4 & pl1 third Move in cell8
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy3part3';
}
// // Strategy3 part4 | cpu first move in cell2 and pl1 move in cell5 execute this function
function cpuStrategy3Part4() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 first Move in cell5 & pl1 second Move in cell1 & third move in cell8 
    if (cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 first Move in cell5 & pl1 second Move in cell1 & third move in cell6 
    if (cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 4 pl1 first Move in cell5 & pl1 second Move in cell4
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 5 pl1 first Move in cell5 & pl1 second Move in cell8
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy3part4';
}
// // Strategy3 part5 | cpu first move in cell2 and pl1 move in cell6 execute this function
function cpuStrategy3Part5() {
    // Step 1 pl1 first Move in cell6
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 4 pl1 first Move in cell6 & pl1 second Move in cell1 & third move in cell8 
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy3part5';
}
// // Strategy3 part6 | cpu first move in cell2 and pl1 move in cell7 execute this function
function cpuStrategy3Part6() {
    // Step 1 pl1 first Move in cell7
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy3part6';
}
// // Strategy3 part7 | cpu first move in cell2 and pl1 move in cell8 execute this function
function cpuStrategy3Part7() {
    // Step 1 pl1 first Move in cell8
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 first Move in cell8 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 first Move in cell8 & pl1 second move in cell3 
    if (cell1.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 4 pl1 first Move in cell8 & pl1 second move in cell3
    if (cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 5 pl1 first Move in cell8 & pl1 second move in cell3 & third move in third cell1
    if (cell1.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 6 pl1 first Move in cell8 & pl1 second move in cell4
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 7 pl1 first Move in cell8 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy3part7';
}
// // Strategy3 part8 | cpu first move in cell2 and pl1 move in cell9 execute this function
function cpuStrategy3Part8() {
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy3part8';
}
// -------------Strategy 4
// // Strategy4 part1 | cpu first move in cell3 and pl1 move in cell1 execute this function
function cpuStrategy4Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 1
        // condition1   pl1 first Move in cell1 & pl1 second move in cell2
        let condition1 = cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete;
        // condition1   pl1 first Move in cell1 & pl1 second move in cell6
        let condition2 = cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete;
    if (condition1||condition2) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell7 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell7 & pl1 third move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy4part1';
}
// // Strategy4 part2 | cpu first move in cell3 and pl1 move in cell2 execute this function
function cpuStrategy4Part2() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part2';
}
// // Strategy4 part3 | cpu first move in cell3 and pl1 move in cell4 execute this function
function cpuStrategy4Part3() {
    // Step 1 pl1 first Move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part3';
}
// // Strategy4 part4 | cpu first move in cell3 and pl1 move in cell5 execute this function
function cpuStrategy4Part4() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part4';
}
// // Strategy4 part5 | cpu first move in cell3 and pl1 move in cell6 execute this function
function cpuStrategy4Part5() {
    // Step 1 pl1 first Move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part5';
}
// // Strategy4 part6 | cpu first move in cell3 and pl1 move in cell7 execute this function
function cpuStrategy4Part6() {
    // Step 1 pl1 first Move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell9 & pl1 third move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part6';
}
// // Strategy4 part7 | cpu first move in cell3 and pl1 move in cell8 execute this function
function cpuStrategy4Part7() {
    // Step 1 pl1 first Move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part7';
}
// // Strategy4 part8 | cpu first move in cell3 and pl1 move in cell9 execute this function
function cpuStrategy4Part8() {
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy4part8';
}
// -------------Strategy 5
// // Strategy5 part1 | cpu first move in cell4 and pl1 move in cell1 execute this function
function cpuStrategy5Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 3
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 5 & pl1 third move in cell 6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 5 & pl1 third move in cell 8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 6 & pl1 third move in cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 7
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell 8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part1';
}
// // Strategy5 part2 | cpu first move in cell4 and pl1 move in cell2 execute this function
function cpuStrategy5Part2() {
    // Step 1 pl1 first Move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 & pl1 second move in cell 6
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part2';
}
// // Strategy5 part3 | cpu first move in cell4 and pl1 move in cell3 execute this function
function cpuStrategy5Part3() {
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part3';
}
// // Strategy5 part4 | cpu first move in cell4 and pl1 move in cell5 execute this function
function cpuStrategy5Part4() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 second Move in cell1 & pl1 third move inn cell6 
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 second Move in cell2 & pl1 third move inn cell6 
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 second Move in cell2 & pl1 third move inn cell7 
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part4';
}
// // Strategy5 part5| cpu first move in cell4 and pl1 move in cell6 execute this function
function cpuStrategy5Part5() {
    // Step 1 pl1 first Move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell7 & pl1 third move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part5';
}
// // Strategy5 part6 | cpu first move in cell4 and pl1 move in cell7 execute this function
function cpuStrategy5Part6() {
    // Step 1 pl1 first Move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell6 & pl1 third move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part6';
}
// // Strategy5 part7 | cpu first move in cell4 and pl1 move in cell8 execute this function
function cpuStrategy5Part7() {
    // Step 1 pl1 first Move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy5part7';
}
// // Strategy5 part8 | cpu first move in cell4 and pl1 move in cell9 execute this function
function cpuStrategy5Part8() {
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy5part8';
}
// -------------Strategy 6
// // Strategy6 part1 | cpu first move in cell6 and pl1 move in cell1 execute this function
function cpuStrategy6Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy6part1';
}
// // Strategy6 part2 | cpu first move in cell6 and pl1 move in cell2 execute this function
function cpuStrategy6Part2() {
    // Step 1 pl1 first Move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 & pl1 second move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy6part2';
}
// // Strategy6 part3 | cpu first move in cell6 and pl1 move in cell3 execute this function
function cpuStrategy6Part3() {
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 & pl1 second move any cell
    if (cell5.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 & pl1 second move any cell
    if (cell5.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy6part3';
}
// // Strategy6 part4 | cpu first move in cell6 and pl1 move in cell4 execute this function
function cpuStrategy6Part4() {
    // Step 1 pl1 first Move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move any cell
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move any cell
    if (cell1.children[0]==undefined&&cell3.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell3 & pl1 third move in cell9
     if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell3 & pl1 third move in cell9
     if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy6part4';
}
// // Strategy6 part5 | cpu first move in cell6 and pl1 move in cell5 execute this function
function cpuStrategy6Part5() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell3 & pl1 third move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell1 & pl1 third move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell1 & pl1 third move in cell9
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
     // Step 1 pl1 first Move in cell5 & pl1 second move in cell4
     if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    
    cpuLastMove()
    cpuStrategyOnRunning='strategy6part5';
}
// // Strategy6 part6 | cpu first move in cell6 and pl1 move in cell7 execute this function
function cpuStrategy6Part6() {
    // Step 1 pl1 first Move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell9 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // Step 1 pl1 first Move in cell7 & pl1 second move any cell
    if (cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move any cell
    if (cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy6part6';
}
// // Strategy6 part7 | cpu first move in cell6 and pl1 move in cell8 execute this function
function cpuStrategy6Part7() {
    // Step 1 pl1 first Move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell3
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell9 & pl1 third move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // Step 1 pl1 first Move in cell8 & pl1 second move any cell
    if (cell9.children[0]==undefined&&cell3.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    
    cpuStrategyOnRunning='strategy6part7';
}
// // Strategy6 part8 | cpu first move in cell6 and pl1 move in cell9 execute this function
function cpuStrategy6Part8() {
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell9 & pl1 second move in cell4 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // Step 1 pl1 first Move in cell9 & pl1 second move any cell
    if (cell4.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    if (cell4.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    
    cpuStrategyOnRunning='strategy6part8';
}
// -------------Strategy 7
// // Strategy7 part1 | cpu first move in cell7 and pl1 move in cell1 execute this function
function cpuStrategy7Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy7part1';
}
// // Strategy7 part2 | cpu first move in cell7 and pl1 move in cell2 execute this function
function cpuStrategy7Part2() {
    // Step 1 pl1 first Move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // Step 1 pl1 first Move in cell2 & pl1 second move any cell
    if (cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    if (cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy7part2';
}
// // Strategy7 part3 | cpu first move in cell7 and pl1 move in cell3 execute this function
function cpuStrategy7Part3() {
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move cell2 & pl1 third move  cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move cell4 & pl1 third move  cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // Step 1 pl1 first Move in cell3 & pl1 second move any cell
    if (cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    if (cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy7part3';
}
// // Strategy7 part4 | cpu first move in cell7 and pl1 move in cell4 execute this function
function cpuStrategy7Part4() {
    // Step 1 pl1 first Move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move cell3 & pl1 third move  cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move cell9 & pl1 third move  cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move any cell
    if (cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    if (cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy7part4';
}
// // Strategy7 part5 | cpu first move in cell7 and pl1 move in cell5 execute this function
function cpuStrategy7Part5() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move cell8 & pl1 third move  cell4
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move cell9 & pl1 third move  cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // Step 1 pl1 first Move in cell5 & pl1 second move any cell
    if (cell9.children[0]==undefined&&!cpuTurnComplete) {
        if (cell3.children[0]!=undefined&&cell8.children[0]!=undefined) {
            cpuPrint(cell1)
        }else{
            cpuPrint(cell9)    
        }
        cpuTurnComplete = true;
    }
    if (cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy7part5';
}
// // Strategy7 part6 | cpu first move in cell7 and pl1 move in cell6 execute this function
function cpuStrategy7Part6() {
    // Step 1 pl1 first Move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move cell3 & pl1 third move  cell8
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    // // Step 1 pl1 first Move in cell6 & pl1 second move any cell
    if (cell1.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy7part6';
}
// // Strategy7 part7 | cpu first move in cell7 and pl1 move in cell8 execute this function
function cpuStrategy7Part7() {
    // Step 1 pl1 first Move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell5  & pl1 third move  cell3
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell5  & pl1 third move  cell4
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy7part7';
}
// // Strategy7 part8 | cpu first move in cell7 and pl1 move in cell9 execute this function
function cpuStrategy7Part8() {
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
     // Step 2 pl1 first Move in cell9 & pl1 second move cell2
     if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 3 pl1 first Move in cell9 & pl1 second move cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 4 pl1 first Move in cell9 & pl1 second move cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
     // Step 5 pl1 first Move in cell9 & pl1 second move cell4 & pl1 third move in cell3
     if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // 
    // Step 6 pl1 first Move in cell9 & pl1 second move cell5 & pl1 third move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell8.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // 
    // Step 4 pl1 first Move in cell9 & pl1 second move cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell8.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy7part8';
}
// -------------Strategy 8
// // Strategy8 part1 | cpu first move in cell8 and pl1 move in cell1 execute this function
function cpuStrategy8Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 2 pl1 first Move in cell1 & pl1 second move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 2 pl1 first Move in cell1 & pl1 second move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 2 pl1 first Move in cell1 & pl1 second move in cell7 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy8part1';
}
// // Strategy8 part2 | cpu first move in cell8 and pl1 move in cell2 execute this function
function cpuStrategy8Part2() {
    // Step 1 pl1 first Move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 & pl1 second move in cell3 & pl1 third move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 & pl1 second move in cell3 & pl1 third move in cell9
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell2 & pl1 secind move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
    }
    // 
    // Step 1 pl1 first Move in cell2 & pl1 secind move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
    }
    // 
    // Step 1 pl1 first Move in cell2 & pl1 secind move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
    }
    // Step 1 pl1 first Move in cell2 & pl1 secind move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy8part2';
}
// // Strategy8 part3 | cpu first move in cell8 and pl1 move in cell3 execute this function
function cpuStrategy8Part3() {
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell9 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell9 & pl1 third move in cell4
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy8part3';
}
// // Strategy8 part4 | cpu first move in cell8 and pl1 move in cell4 execute this function
function cpuStrategy8Part4() {
    // Step 1 pl1 first Move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell3
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
     // 
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell5 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell5 & pl1 third move in cell9
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell7
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell4 & pl1 second move in cell9
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy8part4';
}
// // Strategy8 part5 | cpu first move in cell8 and pl1 move in cell5 execute this function
function cpuStrategy8Part5() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    
    }
    // 
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell4 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell4 & pl1 third move in cell9
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell7 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell9
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy8part5';
}
// // Strategy8 part6 | cpu first move in cell8 and pl1 move in cell6 execute this function
function cpuStrategy8Part6() {
    // Step 1 pl1 first Move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell7
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell9 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy8part6';
}
// // Strategy8 part7 | cpu first move in cell8 and pl1 move in cell7 execute this function
function cpuStrategy8Part7() {
    // Step 1 pl1 first Move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell2 & pl1 third move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell5 & pl1 third move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell9)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell5 & pl1 third move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell9.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy8part7';
}
// // Strategy8 part8 | cpu first move in cell8 and pl1 move in cell7 execute this function
function cpuStrategy8Part8() {
    // Step 1 pl1 first Move in cell9
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell9 & pl1 second move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell9 & pl1 second move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell9 & pl1 second move in cell5 & pl1 third move in cell2
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell9 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell9.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy8part8';
}
// -------------Strategy 9
// // Strategy9 part1 | cpu first move in cell9 and pl1 move in cell1 execute this function
function cpuStrategy9Part1() {
    // Step 1 pl1 first Move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell2 & pl1 third move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined && cell3.children[0].dataset.src==player2Sign &&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell3 & pl1 third move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell3 & pl1 third move in cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell5
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell6 & pl1 third move in cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell7
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell1 & pl1 second move in cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy9part1';
}
// // Strategy9 part2 | cpu first move in cell9 and pl1 move in cell2 execute this function
function cpuStrategy9Part2() {
    // Step 1 pl1 first Move in cell2
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell2 && pl1 second move in cell1 && pl1 second move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell2 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
     // 
    // Step 1 pl1 first Move in cell2 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy9part2';
}
// // Strategy9 part3 | cpu first move in cell9 and pl1 move in cell3 execute this function
function cpuStrategy9Part3() {
    // Step 1 pl1 first Move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell1 & pl1 third move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell1 & pl1 third move in cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell3 & pl1 second move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy9part3';
}
// // Strategy9 part4 | cpu first move in cell9 and pl1 move in cell4 execute this function
function cpuStrategy9Part4() {
    // Step 1 pl1 first Move in cell4
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy9part4';
}
// // Strategy9 part4 | cpu first move in cell9 and pl1 move in cell5 execute this function
function cpuStrategy9Part5() {
    // Step 1 pl1 first Move in cell5
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell8 & pl1 third move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell5 & pl1 second move in cell8 & pl1 third move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]!=undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    cpuLastMove();
    cpuStrategyOnRunning='strategy9part5';
}
// // Strategy9 part6 | cpu first move in cell9 and pl1 move in cell6 execute this function
function cpuStrategy9Part6() {
    // Step 1 pl1 first Move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell6 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell7)
        cpuTurnComplete = true;
    }
    cpuStrategyOnRunning='strategy9part6';
}
// // Strategy9 part7 | cpu first move in cell9 and pl1 move in cell7 execute this function
function cpuStrategy9Part7() {
    // Step 1 pl1 first Move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell2)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell1 & pl1 third move in cell6
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell8)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell1 & pl1 third move in cell8
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]!=undefined&&cell8.children[0]==undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell7 & pl1 second move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell3)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy9part7';
}
// // Strategy9 part8 | cpu first move in cell9 and pl1 move in cell8 execute this function
function cpuStrategy9Part8() {
    // Step 1 pl1 first Move in cell8
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]==undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell4)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell3
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]!=undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell5 & pl1 third move in cell1
    if (cell1.children[0]!=undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]==undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell6)
        cpuTurnComplete = true;
    }
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell5 & pl1 third move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]!=undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]!=undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell6
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]!=undefined&&cell7.children[0]==undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell1)
        cpuTurnComplete = true;
    }
    // 
    // Step 1 pl1 first Move in cell8 & pl1 second move in cell7
    if (cell1.children[0]==undefined&&cell2.children[0]==undefined&&cell3.children[0]==undefined&&cell4.children[0]!=undefined&&cell5.children[0]==undefined&&cell6.children[0]==undefined&&cell7.children[0]!=undefined&&cell8.children[0]!=undefined&&!cpuTurnComplete) {
        cpuPrint(cell5)
        cpuTurnComplete = true;
    }
    cpuLastMove()
    cpuStrategyOnRunning='strategy9part8';
}
// ---------------------------------------------------------------------------------------|