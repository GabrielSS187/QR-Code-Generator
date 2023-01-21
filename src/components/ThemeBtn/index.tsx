import { useState, useEffect } from "react";

import { 
  Container,
  ToggleCheckbox,
  ToggleLabel,
  ToggleLabelBg
 } from "./styles";

export function ThemeBtn () {
  const [ theme, setTheme ] = useState<boolean>(true);

  useEffect(() => {
    theme ?
        document.body.classList.remove("dark")
      :
        document.body.classList.add("dark");
  }, [theme]);

  return (
    <Container>
      <h3 className={theme ? "sr-only" : ""}>claro</h3>

      <ToggleCheckbox
        id="toggle"
        type="checkbox"
        onClick={() => setTheme(!theme)}
      />

      <ToggleLabel htmlFor="toggle">
        <ToggleLabelBg />
      </ToggleLabel>

      <h3 className={!theme ? "sr-only" : ""}>escuro</h3>
    </Container>
  );
};