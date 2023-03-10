# QR-Code-Generator
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GabrielSS187/QR-Code-Generator/blob/main/LICENSE) 
![claro](https://user-images.githubusercontent.com/86306877/213887286-e779faf1-2b75-493e-ad81-a4f9f0854677.png)

# Tema escuro
![escuro](https://user-images.githubusercontent.com/86306877/213887301-41e2833a-d1c6-4764-88d7-e4cfdc531dbb.png)

# Sobre o projeto

### Link: [QR-Code-Generator](https://qr-code-generator-black-psi.vercel.app/)

``QR-Code-Generator``

É um app web feito para gerar "códigos QR" customizáveis com uma interface bonita, agradável e fácil de mexer.
Com poucos cliques e segundos seu ( QR Code ) é gerado.

## Layout Desktop. Com demostração
https://user-images.githubusercontent.com/86306877/213840778-a114b66a-ee4f-4e9d-912d-2ee498b15267.mp4

## Layout Mobile e Tablet
https://user-images.githubusercontent.com/86306877/213840785-1b5731a9-3ae8-498a-91fc-6da2bab67149.mp4

## Competências
- Responsividade
- Acessibilidade
- Boas Práticas

# Tecnologias utilizadas

## Front end
- HTML / CSS / JS / TypeScript
- React JS/TS
- Vite
- Styled-Components
- qrcode.react
- react-color

## Container
- Docker

## Implantação em produção

- Front end web: Vercel

## Inspiração / Template
- https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H

# Como executar o projeto

## Front end web

### Container com Docker
Pré-requisitos: Docker instalado na sua máquina

```bash
# clonar repositório
git clone https://github.com/GabrielSS187/QR-Code-Generator.git

# entrar na pasta do projeto
cd QR-Code-Generator

# criar imagem do projeto
docker build -t qr-code-generator .

# rodar a imagem do projeto
docker run -p 5173:5173 qr-code-generator
```

### Após esse procedimento o projeto deverá esta rodando no endereço:  http://localhost:5173/

### Máquina local
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/GabrielSS187/QR-Code-Generator.git

# entrar na pasta do projeto
cd QR-Code-Generator

# instalar dependências
npm install

# executar o projeto
npm run dev
```

### Após esse procedimento o projeto deverá esta rodando no endereço:  http://localhost:5173/

# Autor

Gabriel Silva Souza

https://www.linkedin.com/in/gabriel-silva-souza-developer
