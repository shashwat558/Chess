import React, { useEffect } from 'react'
import ChessBoard from '../components/ChessBoard'
import Button from '../components/Button'
import { useSocket } from '../hooks/useSocket'



export const INIT_GAME = 'init_game'

export const MOVE = "move";

export const GAME_OVER = "GAME_OVER";

const Game = () => {
    const socket = useSocket();

    useEffect(() => {

    },[socket])
    if(!socket) return <div>Connecting...</div>
  return (
    <div className='justify-center flex'>
        <div className='pt-8 max-w-screen-lg w-full'>
            <div className='grid gird-cols-6 gap-4 md:grid-cols-2 w-full'>
                <div className='cols-span-4 bg-red-200 w-full'>
                    <ChessBoard />
                </div>
                <div className='cols-span-2 bg-green-200 w-full'>
                    <Button onClick={() => {
                        socket?.send(JSON.stringify({
                            type: INIT_GAME
                        }))
                    }}>Play</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Game