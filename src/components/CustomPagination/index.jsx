import React from 'react';
import { PaginationItem, PaginationLink, Pagination } from 'reactstrap';

export default function CustomPagination({
  total,
  page,
  length,
  limit,
  setPage
}) {

  function backPage(value) {
    if (value === 'first') {
      setPage(1)
    } else {
      setPage(page - value)
    }
  }

  function skipPage(value) {
    if (value === 'last') {
      setPage(total % limit === 0 ? parseInt(total / limit) : parseInt(total / limit) + 1)
    } else {
      setPage(page + value)
    }
  }
  return (
    <Pagination>
      {page > 1 && (
        <>
          <PaginationItem>
            <PaginationLink onClick={() => backPage('first')} tabIndex="-1">
              <i className="fas fa-angle-double-left" />
            </PaginationLink>
          </PaginationItem>
          {page > 2 && <PaginationItem>
            <PaginationLink onClick={() => backPage(2)} tabIndex="-1">
              {page - 2}
            </PaginationLink>
          </PaginationItem>}
          <PaginationItem>
            <PaginationLink onClick={() => backPage(1)}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        </>
      )}
      <PaginationItem className="active">
        <PaginationLink onClick={(e) => e.preventDefault()}>
          {page}
        </PaginationLink>
      </PaginationItem>
      {length * page < total && length === limit && (
        <>
          <PaginationItem>
            <PaginationLink onClick={() => skipPage(1)}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
          {length * (page + 1) < total && length === limit && (
            <PaginationItem>
              <PaginationLink onClick={() => skipPage(2)}>
                {page + 2}
              </PaginationLink>
            </PaginationItem>)}
          <PaginationItem>
            <PaginationLink onClick={() => skipPage('last')}>
              <i className="fa fa-angle-double-right" />
            </PaginationLink>
          </PaginationItem>
        </>
      )}
    </Pagination>
  );
}
