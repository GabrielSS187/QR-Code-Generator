import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .sr-only {
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
  }
`;

export const ToggleCheckbox = styled.input`
  display: none !important;

  :checked + label span {
    left: 3rem;
    width: .6rem;
    height: .5rem;
  }

  :checked + label span::before,
  :checked + label span::after{
    width: .5rem;
    height: .5rem;
    top: -1rem;
  }

  :checked + label span::after {
    left: -1.5rem;
    top: 1rem;
  }

  :checked + label::before {
    background: var(--white);
    animation-name: switch;
    animation-duration: .4s;
    animation-fill-mode: forwards;
  }

  :checked + label::after {
    transition-delay: .4s;
	  opacity: 1;
  }

  @keyframes switch {
    0% {
      left: .5rem;
    }
    60% {
      left: .5rem;
      width: 5rem;
    }
    100% {
      left: 4.5rem;
      width: 3rem;
    }
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
	display: flex;
	width: 8rem;
	height: 3.8rem;
	border-radius: 2rem;
	background: var(--sky-bg);
	transition: all var(--cubic-bezier);

  ::before {
    content: '';
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: .4rem;
    left: .3rem;
    border-radius: 3rem;
    background: var(--sun-bg);
    animation-name: switchReverse;
    animation-duration: .4s;
    animation-fill-mode: forwards;
    transition: all var(--cubic-bezier);
  }

  ::after {
    content: '';
    position: absolute;
    right: 2rem;
    top: .4rem;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    opacity: 0;
    background: transparent;
    box-shadow: var(--moon-dots) .5rem .5rem 0 .08rem, var(--moon-dots) -.5rem 1.2rem 0 -.08rem;
    transition-delay: 0;
    transition: all var(--cubic-bezier);
  }

  @keyframes switchReverse {
    0% {
      left: 2rem;
      width: 3rem;
    }
    60% {
      left: 1rem;
      width: 5rem;
    }
    100% {
      left: .5rem;
    }
  }
`;

export const ToggleLabelBg = styled.span`
  position: relative;
	left: 5.5rem;
	top: 1.8rem;
	width: .5rem;
	height: .3rem;
	border-radius: .5rem;
	background: var(--white);
	transition: all var(--cubic-bezier);

  ::before,::after {
    content: '';
    position: absolute;
    top: .55rem;
    left: -.4rem;
    width: 2rem;
    height: .3rem;
    border-radius: .5rem;
    background: var(--white);
    transition: all var(--cubic-bezier);
  }

  ::after {
    top: -.6rem;
    left: -1.5rem;
  }
`;