
import React, { useState } from 'react'
import {Color, PieceSymbol, Square} from "chess.js";
import { MOVE } from '../pages/Game';
const ChessBoard = ({board, socket, setBoard, chess}: {
  setBoard: any;
  chess: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]
, socket: WebSocket;}) => {

  const [from, setFrom] = useState<Square | null>(null);
  
  const [to, setTo] = useState<Square | null>(null);
  return (
    <div className='text-white-200'>
      {board.map((row, i) => {
        return <div key={i} className='flex'>
          {row.map((square, j) => {
            const squareName = String.fromCharCode(97 + (j%8)) + "" + (8 - i) as Square;

            return <div onClick={() => {
              if(!from) {
                setFrom(squareName);
              } else {
               
                socket.send(JSON.stringify({
                  type: MOVE,
                  payload: {
                   move: {
                    from,
                    to: squareName
                   }
                  }
                  
                }))
                chess.move( {
                  from,
                  to: squareName
                })
                setBoard(chess.board());
                console.log({
                  from, 
                  to:squareName
                })


                setFrom(null);
               
              }
            } } key={j} className={`w-16 h-16 ${(i+j)%2 ? 'bg-[#779556]':"bg-[#EBECD0]"}`}>
              <div className='flex justify-center w-full text-[12px] h-full'>
                <div className='h-full flex flex-col justify-center'>
                {square ? square.type: ""}
                </div>
              
              </div>
              
            </div>
          })}
        </div>
      })}
    </div>
  )
}

export default ChessBoard