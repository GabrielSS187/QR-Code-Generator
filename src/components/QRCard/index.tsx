import QrCode from "qrcode.react";

import { Container, H2WorldWrap, QrBox } from "./styles";

import gImg from "../../assets/img/g-img.png";

interface IProps {
  qrRef: any;
  url: string;
  bgColor: string;
  qrColor: string;
  customImg: string | ArrayBuffer | null;
  noImg: boolean;
};

export function QRCard ({
  bgColor,
  customImg,
  noImg,
  qrColor,
  qrRef,
  url
}: IProps) {

  let imgCustom: string | null | undefined | any = undefined;

  noImg ?
    imgCustom = null :
    customImg ?
      imgCustom = customImg :
      imgCustom = gImg;

  return (
    <Container>
      <QrBox 
        ref={qrRef}
        style={{ backgroundColor: bgColor }}
      >

        <QrCode
          size={250}
          value={url ? url : gImg}
          bgColor={bgColor}
          fgColor={qrColor}
          level="H"
          includeMargin
          imageSettings={{
            src: imgCustom!,
            height: 45,
            width: 45,
            excavate: true,
          }}
        />
      </QrBox>
      <H2WorldWrap>{url ? url : "https://my-site-portfolio-dev.vercel.app/"}</H2WorldWrap>
      <p>Insira a URL do seu site e crie seu Qr Code personalizado em poucos segundos com poucos cliques.</p>
    </Container>
  );
};