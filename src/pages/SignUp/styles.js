import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 15px;
  background-color: #f2f2f2;
  border-radius: 4px;
  a{
    margin-top: 10px;
    color: #D0011B;
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