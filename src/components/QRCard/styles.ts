import styled from "styled-components";

export const Container = styled.article`
  max-width: 22rem;
  padding: 1.2rem;
  border-radius: 1.5rem;
  text-align: center;
  background-color: var(--white);
  box-shadow: var(--shadow);

  > * {
    margin-bottom: 1.5rem
  }
`;

export const QrBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  border-radius: .8rem;
  overflow: hidden;

  ::before, ::after {
    content: '';
    position: absolute;
    top: -12rem;
    right: 6rem;
    width: 22rem;
    height: 22rem;
    border-radius: 100%;
    background-color: rgba(255,255,255,.08);
    z-index: 99;
  }

  ::after {
    top: 14rem;
    right: -8rem;
    width: 20rem;
  }

  > canvas {
    border-radius: .8rem;
    transition: var(--cubic-bezier);
    z-index: 98;
  }
`;

export const H2WorldWrap = styled.h2`
  word-wrap: anywhere;
`;