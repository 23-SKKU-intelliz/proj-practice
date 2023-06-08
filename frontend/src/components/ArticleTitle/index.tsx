import { ArticleDetail } from "src/types/api";
import { StyledInfoRow } from "src/components/ArticleTitle/styles";

interface Props {
  article?: ArticleDetail;
}

function ArticleTitle({ article }: Props) {
  return (
    <div>
      <h2>{article?.title}</h2>
      <StyledInfoRow>
        <p>{article?.user.username}</p>
        <p>
          {article
            ? new Date(article.created_at).toLocaleDateString()
            : "loading"}
        </p>
      </StyledInfoRow>
    </div>
  );
}

export default ArticleTitle;
