import { useState } from "react";
import { Link } from "react-router-dom";

interface IPaginationProps {
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ count, page, setPage }: IPaginationProps) => {
  const [activedPage, setActivedPage] = useState(1);
  const totalPage = count !== undefined ? Math.ceil(count / 10) : 1;
  const pageNum = Array.from({ length: totalPage }, (_, i) => i + 1);

  const onClickPage = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    num: number
  ) => {
    setPage(num);
    setActivedPage(Number(e.currentTarget.id));
  };

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNum.map((num) => (
            <li
              className={`page-item ng-scope ${
                num === activedPage ? "active" : ""
              }`}
              key={num}
              onClick={(e) => onClickPage(e, num)}
              id={String(num)}
            >
              <Link to="/" className="page-link ng-binding">
                {num}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
