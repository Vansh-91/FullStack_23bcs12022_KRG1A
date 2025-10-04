import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="flex justify-end p-4 bg-slate-300 h-16">
        <div className="font-semibold m-2 text-2xl">
          <Link to="/Contact">Contact us</Link>
        </div>
        <div className="font-semibold m-2 text-2xl">
          <Link to="/About">About us</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-8">Welcome Home</h1>
        <form className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <input
            className="p-3 m-2 rounded border border-gray-600 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-3 m-2 rounded border border-gray-600 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-3 m-2 rounded border border-gray-600 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Course"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 m-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Home
