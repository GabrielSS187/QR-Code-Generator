import { FormEvent, useEffect, useState } from "react";

import { InputFileImg } from "../Inputs/InputFileImg";
import { InputPicker } from "../Inputs/InputPicker";
import { InputUrl } from "../Inputs/InputUrl";
import { ColorResult } from "react-color";

import { FormContainer, ButtonSubmit } from "./styles";

import gImg from "../../assets/img/g-img.png";

interface IProps {
  qrRef: any;
  url: string;
  qrColor: string;
  qrBgColor: string;
  noImg: boolean;
  setUrl: (params: string) => void;
  setQrColor: (params: string) => void;
  setQrBgColor: (params: string) => void;
  setCustomImg: (params: string | ArrayBuffer | null) => void;
  setNoImg: (params: boolean) => void;
  handleQrReset: () => void;
};

export function FormQR ({
  qrRef,
  url,
  qrColor,
  noImg,
  qrBgColor,
  handleQrReset,
  setCustomImg,
  setNoImg,
  setUrl,
  setQrBgColor,
  setQrColor
}: IProps) {
  const httpRgx = /^https?:\/\//;

  const [ downloaded, setDownloaded ] = useState<boolean>(false);

  useEffect(() => {
    if( downloaded ) {
      const msg = setTimeout(() => setDownloaded(false), 3500);
      return () => clearTimeout(msg);
    };
  }, [downloaded]);

  const handleQrCustom = (color: ColorResult) => setQrColor(color.hex),
    handleQrBgCustom = (color: ColorResult) => setQrBgColor(color.hex);
    const downloadQrCode = (e: FormEvent<HTMLFormElement> ) => {
      e.preventDefault();

      const qrCanvas = qrRef.current.querySelector("canvas"),
        qrImage = qrCanvas.toDataURL("image/png"),
        qrAnchor = document.createElement("a"),
        fileName = url.replace(httpRgx, "").trim();
      qrAnchor.href = qrImage;
      qrAnchor.download = fileName + "_QrCode.png";
      qrAnchor.click();
      document.body.removeChild(qrAnchor);
    
      handleQrReset();
      setDownloaded(true);
    };
  return (
    <FormContainer onSubmit={downloadQrCode}>
      <h1>Gere seu QR Code</h1>

      <InputUrl
        url={url}
        setUrl={setUrl}
        httpRgx={httpRgx}
      />

      <InputPicker
        label={"Qr cor"}
        id={"qrColor"}
        customColor={qrColor}
        handleQrCustom={handleQrCustom}
      />

      <InputPicker
        label={"fundo"}
        id={"qrBgColor"}
        customColor={qrBgColor}
        handleQrCustom={handleQrBgCustom}
      />

      <InputFileImg
        noImg={noImg}
        setNoImg={setNoImg}
        setCustomImg={setCustomImg}
      />

      <ButtonSubmit type="submit">
        <span>Baixar agora</span>
        <img src={gImg} alt="apple-logo" />
      </ButtonSubmit>

      { downloaded &&
        (<p className="success-msg">Qr Code baixado.</p>)
      }
    </FormContainer>
  );
};