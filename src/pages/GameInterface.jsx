import React from "react";
import CardImages from "../components/CardImages";



const GameInterface = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-black to-gray-800">
            <div className="flex items-center flex-col h-[95vh] w-[80vw]">
                <h1 className="font-lora font-semibold text-white p-4">CARD-CLASH</h1>
                <div className="flex flex-col md:flex-row md:items-start items-end mx-auto w-full">
                    <div className="p-2 w-full h-fit flex items-start mt-2 md:mt-4 justify-center">
                        <CardImages />
                    </div>
                    <div className="p-2 flex items-center mt-4">
                        <p className="p-2 text-white font-bold">
                            Moves
                        </p>
                        <div className="h-8 w-16 border-2 border-white rounded-md">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GameInterface;