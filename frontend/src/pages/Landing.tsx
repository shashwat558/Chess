import { useNavigate } from "react-router-dom"



const Landing = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div className="m-4 mt-8">
        <div className="flex md:flex-row flex-col gap-5 justify-center ">
            <div>
                <img  src="/assets/chessBoard.png" alt="" width={600} height={600} />
            </div>
            <div className="ml-40 flex flex-col justify-start items-center text-center">
                <h1 className="text-6xl font-bold leading-[1.2] text-gray-300 tracking-[1.5]"><span >Play Chess</span><br /><span>Online</span><br /><span >on this site</span></h1>
                <div className="mt-4 justify-center flex">
                    <button className="bg-orange-500 w-40 h-20 rounded-md text-2xl font-bold text-gray-900" onClick={() => {navigate("/game")}}>Play Online</button>
                   
                </div>

            </div>
        </div>

    </div>
        

    </div>
  )
}

export default Landing