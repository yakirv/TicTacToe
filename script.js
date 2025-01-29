let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];

let listeners = [];
let players = [];

/* (function createBoard()
    {
        const gameBoardContainer = document.getElementById('game-board');
        for (let i =1; i < 10; i++)
        {
            const cell = document.createElement('div');
            cell.classList = `cell-${i}`;
            cell.style.backgroundColor ='white';
            gameBoardContainer.appendChild(cell);
            console.log ("the FIRSST class is", cell);
           
        }
      
    })() 

 */



(function marker()
{   
    const playerOne = document.getElementById('player-one');
    const playerTwo = document.getElementById('player-two');
    const successMessage = document.getElementById('result-message');
    const gameBoardContainer = document.getElementById('game-board');
    const boardChildren = gameBoardContainer.children;
   
    let turnStatus = true;
    startGame()
   
    for (let i = 0; i < boardChildren.length; i++) {
        const element = boardChildren[i];
        const rawIndex = element.getAttribute('rawIndex');
        const columnIndex = element.getAttribute('columnIndex');
        
        (() =>{listeners.push({type: 'click', listener: `click-cell`})})()
        element.addEventListener('click', ()=>{
            
            if (element.textContent == '')
              {
                if (turnStatus)
                     {
                    playerOne.style.backgroundColor ='white';
                    playerTwo.style.backgroundColor ='#7ED4AD';
                    element.textContent= 'X'; 
                    gameBoard[rawIndex][columnIndex] =  'X';
                    if (checkWin(element))
                         {  
                            const message = document.getElementById('message');
                            message.textContent = `${players[0]} Won!`;
                            playerOne.style.backgroundColor ='white';
                            playerTwo.style.backgroundColor ='white';
                            disableBoard(boardChildren);
                             successMessage.showModal(); 
                            closeMessage(successMessage);
                           
                         }
                         const isTie= checktie(boardChildren);
                         if(isTie)
                        {
                        message.textContent = `It's a TIE !`; 
                        playerOne.style.backgroundColor ='white';
                        playerTwo.style.backgroundColor ='white';
                        disableBoard(boardChildren);
                        successMessage.showModal();
                        closeMessage(successMessage);
                         }
                      turnStatus=false;
                    }
                    if ( !turnStatus && element.textContent != 'X' )
                        {
                        playerOne.style.backgroundColor ='#7ED4AD';
                        playerTwo.style.backgroundColor ='white'; 
                       element.textContent = 'O' ; 
                       gameBoard[rawIndex][columnIndex] =  'O';
                     
                       if (checkWin())
                            {  
                               const message = document.getElementById('message');
                               message.textContent = `${players[1]} Won!`;
                               playerOne.style.backgroundColor ='white';
                               playerTwo.style.backgroundColor ='white'; 
                               disableBoard(boardChildren);
                               successMessage.showModal();
                               closeMessage(successMessage);
                            }
                            const isTie= checktie(boardChildren);
                            if(isTie)
                           {
                           message.textContent = `It's a TIE !`;
                           playerOne.style.backgroundColor ='white';
                           playerTwo.style.backgroundColor ='white'; 
                           disableBoard(boardChildren);
                           successMessage.showModal();
                           closeMessage(successMessage);
                            }    
                        turnStatus =true;
                       }
                
                   
               }
               
            }) 
       
              
           
               
    }
        
 })();

 function startGame()
 {
    const newGamePopup = document.getElementById('start-game-message');
    const newGameform = document.getElementById('playerForm');
    const playerOne = document.getElementById('player-one');
    const playerTwo = document.getElementById('player-two');
    const startBtn = document.getElementById('startBtn');
    newGamePopup.showModal()
 
  
        startBtn.addEventListener('click', (event)=>
            {
                event.preventDefault();
                const formData = new FormData(newGameform);
                const playerOneName =formData.get('player-one-name');
                const playertwoName =formData.get('player-two-name');
                if (playerOneName != '' & playertwoName != '')
                {
                    playerOne.textContent = playerOneName;
                    playerTwo.textContent = playertwoName;
                    playerOne.style.backgroundColor ='#7ED4AD';
                    players.push(playerOneName,playertwoName);
                    newGamePopup.close();
                    newGameform.reset(); 
                }
                else
                {
                    playerOne.textContent = 'Player One';
                    playerTwo.textContent = 'Player Two';
                    playerOne.style.backgroundColor ='#7ED4AD';
                    players.push('Player One','Player Two');
                    newGamePopup.close();
                    newGameform.reset();
                    
                }
                      
            },{ once: true });
    
 
 }


  function closeMessage(successMessage)
  {
    const closeBtn = document.getElementById('close-message');
    closeBtn.addEventListener('click',()=>{ successMessage.close();})
   
  }

function disableBoard(boardElement)
{   
    this.boardElement =boardElement;
    for (let index = 0; index < boardElement.length; index++)
        {
            boardElement[index].classList  = 'no-click';
        }
}

function checkWin()
{
    //rows
  if (gameBoard[0][0] == gameBoard[0][1] & gameBoard[0][1]==gameBoard[0][2] &  gameBoard[0][1]!= '')
    return true;
  if (gameBoard[1][0] == gameBoard[1][1] & gameBoard[1][1]==gameBoard[1][2]&  gameBoard[1][1]!= '')
      return true;  
  if (gameBoard[2][0] == gameBoard[2][1] & gameBoard[2][1]==gameBoard[2][2]&  gameBoard[2][1]!= '')
        return true;
   //columns
  if (gameBoard[0][0] == gameBoard[1][0] & gameBoard[1][0]==gameBoard[2][0] &  gameBoard[1][0]!= '')
    return true;
  if (gameBoard[0][1] == gameBoard[1][1] & gameBoard[1][1]==gameBoard[2][1] &  gameBoard[1][1]!= '')
      return true;  
  if (gameBoard[0][2] == gameBoard[1][2] & gameBoard[1][2]==gameBoard[2][2] &  gameBoard[1][2]!= '')
        return true;
   //diagonals
   if (gameBoard[0][0] == gameBoard[1][1] & gameBoard[1][1]==gameBoard[2][2] &  gameBoard[1][1]!= '')
    return true;
   if (gameBoard[0][2] == gameBoard[1][1] & gameBoard[1][1]==gameBoard[2][0] &  gameBoard[1][1]!= '')
    return true;
   
}

function checktie(cells)
{
    for (let i = 0; i < cells.length; i++) {
        const element = cells[i];
        const textContent = element.textContent;
    
        if (textContent === "")
            { 
          return false;
              }
      }
      return true; 
}


(function resetGame()
{
    const playerOne = document.getElementById('player-one');
    const playerTwo = document.getElementById('player-two');
    const resetBtn = document.getElementById('reset');
    
    resetBtn.addEventListener('click', ()=>{
    console.log('Reset Button Clicked');
    clenBoard()
    })
})();
function clenBoard()
{
    const playerOne = document.getElementById('player-one');
    const playerTwo = document.getElementById('player-two');
    const gameBoardContainer = document.getElementById('game-board');
    const boardChildren = gameBoardContainer.children;
    for (let i = 0; i < boardChildren.length; i++) {
        const element = boardChildren[i];
        element.textContent = '';
        gameBoard[0]=['','',''];
        gameBoard[1]=['','',''];
        gameBoard[2]=['','',''];
        message.textContent = '';
        playerOne.style.backgroundColor ='#7ED4AD';
        playerTwo.style.backgroundColor ='white'; 
        for (let index = 0; index < boardChildren.length; index++)
            {
                 boardChildren[index].classList  = '';
            }
    }   
}
(function newGame()
{
    const newBtn = document.getElementById('newGame');
    
    newBtn.addEventListener('click', ()=>{
        players = [];
        startGame();
        clenBoard();
        console.log('New button clicked')})
})()




