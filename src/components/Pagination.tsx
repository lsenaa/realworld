import { useState } from "react";
import { Link } from "react-router-dom";

interface IPaginationProps {
  count: number;
}

const Pagination = ({ count }: IPaginationProps) => {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = count !== null ? Math.ceil(Number(count) / 10) : 0;

  const onClickPage = (event: React.MouseEvent<HTMLLIElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    // void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    // void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      // void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <nav>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <li
              className={`page-item ng-scope ${
                startPage + index === activedPage ? "active" : ""
              }`}
              onClick={onClickPage}
              key={startPage + index}
              id={String(startPage + index)}
            >
              <Link to="/" className="page-link ng-binding">
                {index + startPage}
              </Link>
            </li>
          )
      )}
      {/* <li className="page-item ng-scope active">
        <Link to="/" className="page-link ng-binding">
          1
        </Link>
      </li> */}
    </nav>
    // <S.PagePrevBtn onClick={onClickPrevPage}>&lt;&lt;</S.PagePrevBtn>
    // {new Array(10).fill(1).map(
    //   (_, index) =>
    //     index + startPage <= lastPage && (
    //       <S.PageLi
    //         onClick={onClickPage}
    //         key={startPage + index}
    //         id={String(startPage + index)}
    //         isActive={startPage + index === activedPage}
    //       >
    //         {index + startPage}
    //       </S.PageLi>
    //     )
    // )}
    // <S.PageNextBtn onClick={onClickNextPage}>&gt;&gt;</S.PageNextBtn>
  );
};

export default Pagination;
