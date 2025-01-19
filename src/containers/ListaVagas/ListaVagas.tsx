// containers/ListaVagas/ListaVagas.tsx
import styled from 'styled-components';
import Vaga from '../Vaga'; // Supondo que o componente Vaga esteja na pasta containers/Vaga

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
