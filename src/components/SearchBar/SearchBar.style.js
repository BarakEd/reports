import styled from 'styled-components';

const Container = styled.div`
height: 50px;
width: 100%;
display: flex;  
justify-content: center;
align-items: center;
`;

const SearchWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;  
flex-direction: column;
justify-content: center;
>div{
  height: 48px;    
  align-items: center;
  display: flex;
}
`;
const ArrowsButtonsWrapper = styled.div`
height: 100%;
&:after {
  content: '';
    height: 9px;
    width: 10px;
    background-size: contain;
    background-position: center;
    position: absolute;
    background-color: #757575;
    clip-path: polygon(0 0, 100% 0, 50% 50%);
    transform: translate(-15px, 25px);
  cursor: pointer;

}
&:before {
  content: '';
    height: 9px;
    width: 10px;
    background-size: contain;
    background-position: center;
    position: absolute;
    background-color: #757575;
    clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
    transform: translate(-15px, 13px);
    cursor: pointer;
}
`;

const styles = {
  Container,
  SearchWrapper,
  ArrowsButtonsWrapper,
}

export default styles;