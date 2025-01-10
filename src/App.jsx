import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { QrCode } from "lucide-react";
import QRCode from "qrcode";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeDisplay from "./components/QRCodeDisplay";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [load, setLoad] = useState(false);
  const [isDark, setIsDark] = useState(() => {  
    if(typeof window !== 'undefined'){    //to check if the type of window should not be undefined for errors 
      return localStorage.getItem('theme') === 'dark' || // for dark 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches); // from documentation of tailwind
    }
    return false; // agr upr wala nahi ha means dark then false means light 
  })
   useEffect(()=> {
    if(isDark){ // if dark ha classlist add dark and set dark in local storage 
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else{  // if light ha toh dark classlist se remove then set light in local storage 
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
   },[isDark])

  const generateQR = useCallback(async (text) => { //callback for not rendering baar async cause it took some time to generate qr code 
    try {
      setLoad(true);
      const url = await QRCode.toDataURL(text, {  //if text ha 
        width: 400,
        margin: 2,
      });
      setQrUrl(url);
    } catch (err) {
      console.error("Error generating QR code:", err);
    } finally {
      setLoad(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      generateQR(text);
    }
  };

  const handleDownload = () => {
    if (qrUrl) {   // if  qrurl ha generate a link 
      const link = document.createElement("a"); 
      link.href = qrUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

 
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <ThemeToggler isDark={isDark} onToggle={
          () => {
            setIsDark(!isDark) //setisdark jo pehle thsa uska ulta
          }
        }/>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-7">
            <QrCode className="w-8 h-8 text-indigo-600 mr-3 dark:text-indigo-400" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              QR Code Generator
            </h1>
          </div>

          <QRCodeForm
            text={text}
            load={load}
            onTextChange={setText}
            onSubmit={handleSubmit}
          />

          {qrUrl && (
            <QRCodeDisplay qrUrl={qrUrl} onDownload={handleDownload} />
          )}
        </div>
      </div>
  );
}

export default App;
