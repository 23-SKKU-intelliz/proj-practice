import NeumorphismBase from "src/components/NeumorphismBase";
import {
  StyledArticleBriefWrapper,
  StyledDateText,
  StyledTitleText,
  StyledUsernameText,
} from "src/components/ArticleBriefCard/styles";
import { Link } from "react-router-dom";
import { ArticleBrief } from "src/types/api";

interface Props {
  article: ArticleBrief;
}

function ArticleBriefCard({ article }: Props) {
  const createdDate = new Date(article.created_at);

  return (
    <Link to={`/posts/${article.id}`} style={{ textDecoration: "none" }}>
      <NeumorphismBase>
        <StyledArticleBriefWrapper>
          <StyledTitleText>{article.title}</StyledTitleText>
          <StyledArticleBriefWrapper>
            <StyledUsernameText>{article.user.username}</StyledUsernameText>
            <StyledDateText>{createdDate.toLocaleDateString()}</StyledDateText>
          </StyledArticleBriefWrapper>
        </StyledArticleBriefWrapper>
      </NeumorphismBase>
    </Link>
  );
}

export default ArticleBriefCard;
