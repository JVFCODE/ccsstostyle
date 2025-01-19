import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--cor-principal);
  padding: 20px;
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Meu Aplicativo</h1>
    </HeaderContainer>
  );
};

export default Header;
