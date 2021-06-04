import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { useFetchReports } from './hooks';
import styles from './App.style';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let reports = useFetchReports();

  const onCloseReports = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  }

  const handleRefresh = () => {
  };


  return (
    <styles.App>
        {isSidebarOpen && 
          <Sidebar 
            reports={ reports }
            onClose={ onCloseReports }
            onRefresh={ handleRefresh }
          />
        }
        <styles.ToggleButton onClick={toggleSidebar}>
          Toggle Reports
        </styles.ToggleButton>
    </styles.App>
  );
}

export default App;
