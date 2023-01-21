import { ChangeEvent } from "react";

import { RelativeInputUrlContainer } from "./styles";

interface IProps {
  httpRgx: RegExp;
  url: string;
  setUrl: (param: string) => void;
};

export function InputUrl ({ httpRgx, url, setUrl }: IProps) {
  const handleUrl = (e: ChangeEvent<HTMLInputElement>) =>
   setUrl(e.target.value),
   handleClearUrl = () => setUrl("");

  const handleValidateUrl = () => {
    if ( url && !httpRgx.test(url) ) {
      setUrl("http://" + url);
    };
  };

  return (
    <RelativeInputUrlContainer>
      <label htmlFor="url">Entre com a sua url</label>
      <input
        id="url"
        name="url"
        value={url}
        onChange={handleUrl}
        onBlur={handleValidateUrl}
        placeholder="Adicionar URL para geração do QR Code"
        required
      />

      {
        url &&
        ( 
          <button 
            className="clear-btn"
            onClick={handleClearUrl}
          >
            X
          </button> 
        )
      }
    </RelativeInputUrlContainer>
  );
};