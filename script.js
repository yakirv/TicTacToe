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
                    element.textContent= 'X'; 
                    gameBoard[rawIndex][columnIndex] =  'X';
                    if (checkWin())
                         {  
                            const message = document.getElementById('message');
                            message.textContent = 'PLAYER ONE WIN';
                         }
                         const isTie= checktie(boardChildren);
                         if(isTie)
                        {
                        message.textContent = 'Its a TIE'; 
                         }
                      turnStatus=false;
                    }
                    if ( !turnStatus && element.textContent != 'X' )
                        {

                       element.textContent = 'O' ; 
                       gameBoard[rawIndex][columnIndex] =  'O';
                       playerTwoTurn = false;
                       if (checkWin())
                            {  
                               const message = document.getElementById('message');
                               message.textContent = 'PLAYER Two WIN';
                            }
                            const isTie= checktie(boardChildren);
                            if(isTie)
                           {
                           message.textContent = 'Its a TIE'; 
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
          return false;ately
              }
      }
      return true; 
}


