import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';

const QRCodeScanner: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const qrScannerRef = useRef<QrScanner | null>(null);
    const [scannedData, setScannedData] = useState<string>('');
    const [isScanning, setIsScanning] = useState<boolean>(false);
  
    useEffect(() => {
      if (videoRef.current) {
        qrScannerRef.current = new QrScanner(
          videoRef.current,
          (result) => {
            setScannedData(result.data);
            if (qrScannerRef.current) {
              qrScannerRef.current.stop(); // Stop the scanner after a successful scan
            }
          },
          {
            onDecodeError: (error) => {
              console.error('Decode error:', error);
            },
            highlightScanRegion: true,
            highlightCodeOutline: true,
          }
        );
      }
  
      return () => {
        if (qrScannerRef.current) {
          qrScannerRef.current.destroy(); // Clean up the scanner on component unmount
        }
      };
    }, []);
  
    const startScanning = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          if (qrScannerRef.current) {
            qrScannerRef.current.start();
            setIsScanning(true);
          }
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };
  
    const stopScanning = () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
        setIsScanning(false);
      }
    };
  
    return (
      <div>
        <h2>QR Code Scanner</h2>
        <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />
        {scannedData && <p>Scanned Result: {scannedData}</p>}
        <div>
          <button onClick={startScanning} disabled={isScanning}>
            Start Scanning
          </button>
          <button onClick={stopScanning} disabled={!isScanning}>
            Stop Scanning
          </button>
          <button onClick={() => window.location.reload()}>Scan Again</button>
        </div>
      </div>
    );
  };

export default QRCodeScanner;
