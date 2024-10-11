import React from 'react'
import {Color, PieceSymbol, Square} from "chess.js";
const ChessBoard = ({board}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]
}) => {
  return (
    <div className='text-white-200'>
      {board.map((row, i) => {
        return <div key={i} className='flex'>
          {row.map((square, j) => {
            return <div key={j} className={`w-16 h-16 ${(i+j)%2 ? 'bg-[#779556]':"bg-[#EBECD0]"}`}>
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