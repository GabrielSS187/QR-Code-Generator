import styled from "styled-components"

export const FormContainer = styled.form`
  width: 100%;
	position: relative;

  button:hover,
  input:focus,
  input:active {
    opacity: .85;
    transform: scale(1.1);
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
	justify-content: center;
	gap: 1rem;
	width: 100%;
	margin-block: 2.5rem 0;
	font-size: 1.25rem;
	font-weight: 700;
	text-transform: uppercase;
	color: var(--white);
	background-color: var(--dark-blue);

  > img {
    max-width: 1.5rem;
    animation: pulse infinite 1s alternate;
  }

  @keyframes pulse {
    from { transform: scale(0.8); }
    to { transform: scale(1.2); }
  }
`;