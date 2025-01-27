let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];


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
    const gameBoardContainer = document.getElementById('game-board');
    const boardChildren = gameBoardContainer.children;
    let turnStatus = true;
    
    for (let i = 0; i < boardChildren.length; i++) {
        const element = boardChildren[i];
        const rawIndex = element.getAttribute('rawIndex');
        const columnIndex = element.getAttribute('columnIndex');
        
        element.addEventListener('click', ()=>{
            if (element.textContent == '')
              {
                if (turnStatus)
                     {
                    playerOne.style.backgroundColor ='white';
                    playerTwo.style.backgroundColor ='#7ED4AD';
                    element.textContent= 'X'; 
                    gameBoard[rawIndex][columnIndex] =  'X';
                    if (checkWin())
                         {  
                            const message = document.getElementById('message');
                            message.textContent = 'PLAYER ONE WIN';
                            playerOne.style.backgroundColor ='white';
                            playerTwo.style.backgroundColor ='white';
                         }
                         const isTie= checktie(boardChildren);
                         if(isTie)
                        {
                        message.textContent = 'Its a TIE'; 
                        playerOne.style.backgroundColor ='white';
                        playerTwo.style.backgroundColor ='white';
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
                               message.textContent = 'PLAYER Two WIN';
                               playerOne.style.backgroundColor ='white';
                               playerTwo.style.backgroundColor ='white'; 
                            }
                            const isTie= checktie(boardChildren);
                            if(isTie)
                           {
                           message.textContent = 'Its a TIE';
                           playerOne.style.backgroundColor ='white';
                           playerTwo.style.backgroundColor ='white'; 
                            }    
                        turnStatus =true;
                       }
                
               }
            
            })        
    }
         
 })();
  



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
    const gameBoardContainer = document.getElementById('game-board');
    const boardChildren = gameBoardContainer.children;
    for (let i = 0; i < boardChildren.length; i++) {
        const element = boardChildren[i];
        element.textContent = '';
        gameBoard[0]=['','',''];
        gameBoard[1]=['','',''];
        gameBoard[2]=['','',''];
        message.textContent = '';
        playerOne.style.backgroundColor ='white';
        playerTwo.style.backgroundColor ='white'; 
    }   
    })
})()