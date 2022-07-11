import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 15px;
  background-color: #f2f2f2;
  a{
    
  }
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img{
        width: 80px;
        margin-bottom: 15px;
    }
`