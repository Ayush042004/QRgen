import React from 'react'
import {Download} from 'lucide-react';

function QRCodeDisplay({qrUrl, onDownload}) {
  return (
    <div className='mt-8 space-y-4'>
      <div className='flex justify-center'>
        <img src={qrUrl} alt="generated qr code" className='w-64 h-64  hover:scale-105 dark:invert-[0.15]'/>
      </div>
      <button onClick={onDownload} className='w-full flex items-center justify-center bg-green-900 text-white py-2 px-5 rounded-md hover:bg-green-700 focus:outline-none
      focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
        <Download className="w-5 h-5 mr-2"/>
        Download QR Code 
      </button>
    </div>
  )
}

export default QRCodeDisplay