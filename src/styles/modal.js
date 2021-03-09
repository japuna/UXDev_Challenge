import styled from 'styled-components';


export const ModalContainer = styled.div`
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: hsla(228, 0%, 15%, 0.6);
    display: flex; 
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;      

  
  `;

  export const ModalWindow = styled.div`
    z-index: 200;
    width: 68%;
    height: auto;
    background-color: ${({ theme }) => theme.body};
    border-radius: 14px;  
  
    .data{
        width: 91%;
        background-color: ${({ theme }) => theme.header};
        padding: 2% 2% 2% 6%;
        border-radius: 14px 14px 0 0;
        display: flex;
        flex-direction: column;
    }



    .data__exit{
        width: 100%;
        text-align: right;
        font-size: 0.8em;
        cursor: pointer;
    } 
    
    .data__exit p{
        font-weight: 600;
        color: ${({ theme }) => theme.textTitle};
        text-decoration:none; 
    }   
    .data__nameNetwork{
        font-size: 0.8em;
        font-weight: 600;
        color: ${({ theme }) => theme.colourSocial};
        
    }

    .graphics{
        width: 88%;
        height: 220px;
        padding: 3% 3% 4% 2%;

    }

    .graphics p{
        margin-left: 5%; 
        margin-bottom: 2%; 
        color: ${({ theme }) => theme.colourSocial};
    }
  `;

  export const InfoEstadistics = styled.div`
        width: 100%
        height: auto;
        display: flex;
        margin-top: 4%;
  `;