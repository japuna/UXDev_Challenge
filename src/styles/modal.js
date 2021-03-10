import styled from 'styled-components';

//background of modal
export const ModalContainer = styled.div`
    position: absolute; // No space is create for this element in the page. so it's palced with top and left 
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: hsla(228, 0%, 15%, 0.8);
    display: flex; 
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;      

  
  `;

  //modal
  export const ModalWindow = styled.div`
    z-index: 200; // to put over the background 
    height: auto;
    background-color: ${({ theme }) => theme.body};
    border-radius: 14px;  

    //the first segment of the modal. 
    .data{
        width: 91%;
        background-color: ${({ theme }) => theme.header};
        padding: 2% 2% 2% 6%;
        border-radius: 14px 14px 0 0;
        display: flex;
        flex-direction: column;
    }


    //cointainer of X to exit the modal  
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
     // container with the chart.  
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

    @media only screen and (min-width: 801px) {
        width: 68%;
      }

      @media only screen and (max-width: 800px) {
        width: 90%;  

        .data__exit p{
          font-size: 1.4em;
        }  
      }  
  
      @media only screen and (max-width: 480px) {
        width: 94%;  
      } 
  `;

  export const InfoEstadistics = styled.div`
        width: 100%
        height: auto;
        display: flex;
        margin-top: 4%;
        flex-direction: row;
        flex-wrap: wrap;
        
      
          @media only screen and (max-width: 480px) {
            justify-content: space-between;
          } 
  `;