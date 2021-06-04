import React from 'react';
import styles from './Sidebar.style';
import GridItem from '../GridItem';
import SearchBar from '../SearchBar';

const Sidebar = ({ reports, onClose, onRefresh }) => {
  const sortFunc = (report1, report2) => {
    if(report1.updated > report2.updated) {
      return report1;
    }
    return report2;
  };

  const renderContent = () => {
    return reports?.sort(sortFunc)?.map(report => <GridItem key={report.id} {...report}/>)
  }

  return (
    <styles.Container>
      <styles.Header>
        <styles.TitleWrapper>
          Reports {reports?.length}
        </styles.TitleWrapper>
        <styles.ButtonsWrapper>
          <styles.StyledRefreshIcon onClick={ onRefresh }/>
          <styles.StyledCloseIcon onClick={ onClose }/>
        </styles.ButtonsWrapper>
      </styles.Header>
      <SearchBar />
      <styles.ContentWrapper>
      {renderContent()}
      </styles.ContentWrapper>
    </styles.Container>
  );
};

export default Sidebar;