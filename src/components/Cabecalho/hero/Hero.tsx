import styled from 'styled-components';

const HeroContainer = styled.section`
  background: url('sua-imagem.jpg') no-repeat center center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h2>Bem-vindo ao nosso site!</h2>
    </HeroContainer>
  );
};

export default Hero;
