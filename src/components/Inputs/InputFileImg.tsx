import { ChangeEvent } from "react";

import { InputFileContainer, InputCheckboxContainer } from "./styles";

interface IProps {
  noImg: boolean;
  setNoImg: (params: boolean) => void;
  setCustomImg: (params: string | ArrayBuffer | null) => void;
};

export function InputFileImg({ noImg, setNoImg, setCustomImg }: IProps) {
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if( reader.readyState === 2 ) {
        setCustomImg(reader.result);
      };
    };

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    };
  };
  
  return (
    <>
      <InputFileContainer>
        <label  htmlFor="file">Carregar imagem personalizada</label>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImage}
          disabled={noImg}
        />
      </InputFileContainer>

      <InputCheckboxContainer>
        <input
          id="noImg"
          name="noImg"
          type="checkbox"
          checked={noImg}
          onClick={() => setNoImg(!noImg)}
        />
        <label htmlFor="noImg">Sem imagem</label>
      </InputCheckboxContainer>
    </>
  );
};