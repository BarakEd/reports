import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import RefreshIcon from '@material-ui/icons/Refresh';

const StyledCloseIcon = styled(CloseIcon).attrs({
  fontSize: 'small',
})`
  color: #757575;
  cursor: pointer;
`;

const StyledRefreshIcon = styled(RefreshIcon).attrs({
  fontSize: 'small',
})`
  color: #757575;
  cursor: pointer;
`;

const Container = styled.div`
  height: 100%;
  width: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

const TitleWrapper = styled.div`
  color: #2196f3;    
  font-size: 20px;
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  overflow-y: scroll;
`;

const styles = {
  Container,
  Header,
  ButtonsWrapper,
  TitleWrapper,
  ContentWrapper,
  StyledCloseIcon,
  StyledRefreshIcon,
}

export default styles;