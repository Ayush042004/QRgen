import React from 'react'
import { RefreshCw } from 'lucide-react'

function QRCodeForm({
  text, load, onTextChange, onSubmit
}) {
  
  return (
    <form onSubmit={onSubmit} className='space-y-4'>
    <div>
      <label htmlFor='text' className='block text-sm font-medium text-gray-700  dark:text-gray-200 mb-1'>
        Enter text or URL 
      </label>
      <input 
      type="text"
      id="text"
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white'
      placeholder='Enter text to generate QR code'
      />
    </div>

    <button
    type="submit"
    disabled={!text || load} //button disabled rahega jab koi text nahi hoga and load state me ha jab
    className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md
    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50
    disabled:cursor-not-allowed flex items-center justify-center transition-colors'
    >
    {load ? (
      <>
      <RefreshCw  className="w-5 h-5 mr-2 animate-spin"/>
      Generating...
      </>
    ): (
      'Generate QR Code'
    )}
    </button>
    </form>
  )
}

export default QRCodeForm