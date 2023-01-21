import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

import { InputTypeButtonContainer } from "./styles";

interface IProps {
  id: string;
  label: string;
  customColor: string;
  handleQrCustom: (params: ColorResult) => void;
};

export function InputPicker({ id, label, customColor, handleQrCustom }: IProps) {
  const [ showPicker, setShowPicker ] = useState<boolean>(false),
    handleShowPicker = () => setShowPicker(!showPicker);
  
  return (
    <div>
      <InputTypeButtonContainer>
        <input
          id={id}
          name={id}
          aria-label={id}
          type="button"
          style={{ background: customColor }}
          onClick={handleShowPicker}
        />
        <label htmlFor={id}>Customizar {label}</label>
      </InputTypeButtonContainer>

      { showPicker &&
        (
          <SketchPicker
            presetColors={["#000000", "#FFFFFF"]}
            color={customColor}
            onChange={handleQrCustom}
          />
        )
      }
    </div>
  );
};