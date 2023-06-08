import NeumorphismBase from "src/components/NeumorphismBase";
import { Comment } from "src/types/api";
import {
  StyledCommentWrapper,
  StyledContentText,
  StyledDateText,
  StyledUsernameText,
} from "src/components/CommentCard/styles";

interface Props {
  comment: Comment;
}

function CommentCard({ comment }: Props) {
  return (
    <NeumorphismBase>
      <StyledCommentWrapper>
        <StyledContentText>{comment.content}</StyledContentText>
        <StyledCommentWrapper>
          <StyledUsernameText>{comment.user.username}</StyledUsernameText>
          <StyledDateText>
            {new Date(comment.created_at).toLocaleDateString()}
          </StyledDateText>
        </StyledCommentWrapper>
      </StyledCommentWrapper>
    </NeumorphismBase>
  );
}

export default CommentCard;
