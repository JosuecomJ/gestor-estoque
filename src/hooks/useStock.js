import { useContext } from 'react';
import { StockContext } from '../contexts/StockContext';

export function useStock() {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error('useStock must be used within a StockContextProvider');
  }
  return context;
}