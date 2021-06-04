import styled from 'styled-components';

const GridItem = styled.div`
  min-height: 53px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const NameTestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding-left: 10px;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`;

const TestWrapper = styled.div`
font-size: 15px;
`;

const DateTimeWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  justify-content: space-between;
`;

const DateWrapper = styled.div``;
const TimeWrapper = styled.div``;

const LocationWrapper = styled(TestWrapper)`
  margin-left: 10px;
`;

const DetailsWrapper = styled.div`
  display: flex;
`;

const styles = {
  GridItem,
  NameTestWrapper,
  NameWrapper,
  TestWrapper,
  DateTimeWrapper,
  DateWrapper,
  TimeWrapper,
  LocationWrapper,
  DetailsWrapper
};

export default styles;