import React, { useRef, useState } from 'react'

const CommentForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>CommentForm</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea className='p-4 outline-none w-full rounded-lg h-40 focus-ring-2 bg-gray-100 focus:ring-gray-200 text-gray-700' name='comment' placeholder='Comment'></textarea>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>

        <div className="grid grid-cols-1 gap-4 mb-4">

        </div>

        {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button type="button" className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentForm