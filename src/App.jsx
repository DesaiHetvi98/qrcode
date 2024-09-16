import QRCode from 'qrcode'
import {useState} from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      /* style for qr code didn't show blury */
      width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
    }, (err, url) => {
      if(err) return console.error(err)

      //console.log(url)
      setQrcode(url)
    })
  }

  return (
      <div className="app">
        <h1>QR Code Generator</h1>
        <input 
          type="text" 
          placeholder="e.g. https://google.com" 
          value={url} 
          onChange={(evt) => setUrl(evt.target.value)}>
        </input>
        <button onClick={GenerateQRCode}>Generate</button>

        {/* image of qr code and download button will apeared only when you generate link for that */}
        {qrcode && <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">Download</a>
        </>}
      </div>
      
  )
}

export default App
