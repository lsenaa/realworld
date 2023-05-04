import { Link } from "react-router-dom";

interface IPaginationProps {
  count: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  activedPage: number;
  setActivedPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}

const Pagination = ({
  count,
  setPage,
  activedPage,
  setActivedPage,
  loading,
}: IPaginationProps) => {
  const totalPage = count !== undefined ? Math.ceil(count / 10) : 0;
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
      {loading ? (
        <></>
      ) : (
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
      )}
    </>
  );
};

export default Pagination;
