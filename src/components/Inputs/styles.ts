import styled from "styled-components"

export const  RelativeInputUrlContainer = styled.div`
  position: relative;

  > input {
    margin-top: .3rem;
  }

  > .clear-btn {
    position: absolute;
    top: 1.2rem;
    right: 0;
    width: max-content;
    font-size: 1.8rem;
    background: transparent;
    box-shadow: none;
    z-index: 95;
    cursor: pointer;
  }
`;

export const InputFileContainer = styled.div`
  > input {
    accent-color: var(--white);
    padding-block: .5rem;
    margin-top: .3rem;
  }
`;

export const InputCheckboxContainer = styled.div`
  > input {
    width: max-content;
    display: inline-block;
    transform: scale(1.5);
  }
    
  > label {
    margin-left:  1rem;
  }
`;

export const InputTypeButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  > input {
    display: inline;
    padding: .3rem;
    width: 4rem;
    height: 2rem;
    margin-left: 1rem;
  }

  > label {
    margin-top: .35rem;
  }
`;
