import { useState, useEffect } from 'react';

export const useFetchReports = () => {
  const [reports, setReports] = useState();

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('sidebar.json').then(res => res.json());
      
      setReports(response);
    };
    
    fetchReports();
  },[]);
  
  return reports;
}