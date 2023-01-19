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
      <h3 className={theme ? "sr-only" : ""}>light</h3>

      <ToggleCheckbox
        id="toggle"
        type="checkbox"
        className="toggle-checkbox"
        onClick={() => setTheme(!theme)}
      />

      <ToggleLabel htmlFor="toggle" className="toggle-label">
        <ToggleLabelBg className="toggle-label-bg" />
      </ToggleLabel>

      <h3 className={!theme ? "sr-only" : ""}>dark</h3>
    </Container>
  );
};