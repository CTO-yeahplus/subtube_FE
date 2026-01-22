import { IPaginationParams } from '@/interfaces';
import { useState } from 'react';

const LIMIT = 20;

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const onChange = (v: number) => {
    setCurrentPage(v);
  };

  const params: IPaginationParams = {
    page: currentPage,
    pageSize: LIMIT,
  };

  return {
    currentPage,
    onChange,
    params,
    LIMIT,
  };
};
