import { useUserQuery } from "../../hooks/queries/useQueryUser";
import { IArticle } from "./ArticlePreview";
import ButtonNoAccess from "./ButtonsNoAccess";
import ButtonWithAccess from "./ButtonWithAccess";

export interface IButtonProps {
  article: IArticle;
}

const Buttons = ({ article }: IButtonProps) => {
  const { userData } = useUserQuery();

  return (
    <>
      {userData?.data.user.username === article?.author.username ? (
        <ButtonWithAccess article={article} />
      ) : (
        <ButtonNoAccess article={article} />
      )}
    </>
  );
};

export default Buttons;
