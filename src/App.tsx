import { useRef, useState } from "react";

import { ThemeBtn } from "./components/ThemeBtn";
import { FormQR } from "./components/FormQR";
import { QRCard } from "./components/QRCard";

import  { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const qrRef = useRef();

  const [url, setUrl] = useState<string>(""),
    [qrColor, setQrColor] = useState<string>("#ffffff"),
    [qrBgColor, setQrBgColor] = useState<string>("#2e7dfa"),
    [customImg, setCustomImg] = useState<string | ArrayBuffer | null>(""),
    [noImg, setNoImg] = useState<boolean>(false);

    const handleQrReset = () => {
      setUrl("");
      setQrBgColor("#2c7dfa");
      setQrColor("#ffffff");
      setCustomImg("");
      setNoImg(false);
    };
  return (
    <>
      <header>
        <ThemeBtn />
      </header>

      <main>
        <FormQR
          noImg={noImg}
          qrBgColor={qrBgColor}
          qrColor={qrColor}
          url={url}
          qrRef={qrRef}
          handleQrReset={handleQrReset}
          setCustomImg={setCustomImg}
          setNoImg={setNoImg}
          setQrBgColor={setQrBgColor}
          setQrColor={setQrColor}
          setUrl={setUrl}
        />
        
        <QRCard
          qrRef={qrRef}
          url={url}
          bgColor={qrBgColor}
          qrColor={qrColor}
          customImg={customImg}
          noImg={noImg}
        />
      </main>
      <GlobalStyles/>
    </>
  );
};

export default App;
