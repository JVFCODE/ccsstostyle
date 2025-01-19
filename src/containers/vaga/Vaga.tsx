import styled from 'styled-components';
import Vaga from './Vaga'; // Supondo que você tenha um componente Vaga

const ListaVagasContainer = styled.div`
  margin: 20px 0;
`;

const ListaVagas = () => {
  return (
    <ListaVagasContainer>
      <Vaga />
      <Vaga />
      <Vaga />
    </ListaVagasContainer>
  );
};

export default ListaVagas;
