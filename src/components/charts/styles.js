import styled from 'styled-components';
/*
This styled component costumizes the Chart's ToopTip 
*/
export const CustomTooltip = styled.div`
  
  background-color: ${({ theme }) => theme.body};
  border: 1px solid hsl(243, 51%, 70%);
  border-radius: 2px;
  padding: 3% 1%;
  text-align: center;
  width:120px;
  p{
    color: hsl(243, 51%, 70%);
    font-size: 0.8rem;
  }
`;
