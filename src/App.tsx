import QrScanner from 'qr-scanner';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import QRCodeScanner from './QRCodeScanner';

function App() {
  // const videoRef = React.createRef<HTMLVideoElement>();
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const qrScannerRef = useRef<QrScanner | null>(null);
  // const [isScanning, setIsScanning] = useState(false);
  // const [list, setList] = useState<MediaDeviceInfo[]>([]);

  // useEffect(() => {
  //   // Инициализация сканера QR-кодов
  //   // navigator.mediaDevices.enumerateDevices().then((res) => setList(res));
  //   if (videoRef.current) {
  //     qrScannerRef.current = new QrScanner(
  //       videoRef.current,
  //       (result) => {
  //         console.log('Decoded text:', result);
  //         // Здесь вы можете обработать результат сканирования
  //       },
  //       {
  //         onDecodeError: (error) => {
  //           console.error('Decode error:', error);
  //         },
  //         highlightScanRegion: true,
  //         highlightCodeOutline: true,
  //       }
  //     );

  //     // Запуск сканера
  //     // qrScannerRef.current.start();
  //   } else {
  //     console.error('videoRef.current is null');
  //   }
  //   // Очистка при размонтировании компонента
  //   return () => {
  //     if (qrScannerRef.current) {
  //       qrScannerRef.current.stop();
  //       qrScannerRef.current.destroy();
  //     }
  //   };
  // }, []);

  // const startScanning = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: {
  //         facingMode: 'environment',
  //         width: { ideal: 1920 },
  //         height: { ideal: 1080 },
  //       },
  //     });
  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream;
  //       if (qrScannerRef.current) {
  //         qrScannerRef.current.start();
  //         setIsScanning(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error accessing camera:', error);
  //   }
  // };

  // const stopScanning = () => {
  //   if (qrScannerRef.current) {
  //     qrScannerRef.current.stop();
  //     setIsScanning(false);
  //   }
  // };

  return (
    <>
      <h1>Qr scanner</h1>
      <QRCodeScanner />
      {/* <QrHTMLScanner /> */}
      {/* <video ref={videoRef} autoPlay playsInline />
      <div>
        <button onClick={startScanning} disabled={isScanning}>
          Start Scanning
        </button>
        <button onClick={stopScanning} disabled={!isScanning}>
          Stop Scanning
        </button>
      <p>{list.map((l) => l.label).join(', ')}</p>
      </div> */}
    </>
  );
}

export default App;
