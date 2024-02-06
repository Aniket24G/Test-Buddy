import React from 'react'

function Questions() {
    return (
        <div className= 'min-h-screen w-full mx-auto bg-green-300 items-center justify-center'>
            <div className="question p-6 lg:w-1/2 mx-auto lg:pr-4 mb-4 lg:mb-8">
                <p className='text-2xl font-mono font-semibold p-4 border-2 border-orange-400 mt-20 rounded-md bg-indigo-600 text-white'>Who is the prime minisiter of India</p>
            </div>
            <div className="options grid grid-flow-col grid-rows-2 w-1/2 mx-auto">
                <div className="optionA text-center border-2 hover:border-orange-400 bg-indigo-600  lg:m-4 font-semibold font-mono text-white p-2 rounded-md">Narendra Modi</div>
                <div className="optionB text-center border-2 hover:border-orange-400 bg-indigo-600 lg:m-4 font-semibold font-mono text-white p-2 rounded-md">Rajnath Singh</div>
                <div className="optionC text-center border-2 hover:border-orange-400 bg-indigo-600  lg:m-4  font-semibold font-mono text-white p-2 rounded-md">Droupadi Murmu</div>
                <div className="optionD text-center border-2 hover:border-orange-400 bg-indigo-600 font-semibold font-mono text-white lg:m-4 p-2 rounded-md">Amit Shaha</div>
            </div>
            <div className="panel w-full flex flex-row justify-between items-center bottom-0 fixed font-semibold font-mono p-2 bg-indigo-600 text-white">
                <div className="navs">
                    <button className=' bg-orange-500  rounded-md p-2 m-2 hover:border-b-2 border-green-400 duration-100'>Previous</button>
                    <button className=' bg-orange-500  rounded-md p-2 m-2 hover:border-b-2 border-green-400 duration-100'>Next</button>
                </div>
                <button className='p-2 m-2 hover:border-b-2 border-green-400 bg-orange-500  rounded-md duration-100 '>Submit</button>
            </div>
        </div>
    )
}

export default Questions