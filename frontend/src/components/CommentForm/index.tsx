import NeumorphismBase from "src/components/NeumorphismBase";
import NeumorphismButton from "src/components/NeumorphismButton";
import { useNavigate, useParams } from "react-router-dom";
import { FormEvent } from "react";
import axios from "axios";
import { StyledCommentFormWrapper } from "src/components/CommentForm/styles";

interface Props {
  articleId: number;
}

function CommentForm({ articleId }: Props) {
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const formElements = e.currentTarget
      .elements as typeof e.currentTarget.elements;
    const userIdInput = formElements.namedItem("userId") as HTMLInputElement;
    const contentInput = formElements.namedItem("content") as HTMLInputElement;

    await axios.post(
      `http://127.0.0.1:8000/api/comments/?article_id=${articleId}`,
      {
        user_id: userIdInput.value,
        content: contentInput.value,
      }
    );
  };

  return (
    <NeumorphismBase>
      <form onSubmit={handleSubmit}>
        User Id: <input type="number" name="userId" />
        <StyledCommentFormWrapper>
          <textarea name="content" />
          <NeumorphismButton type="submit">submit</NeumorphismButton>
        </StyledCommentFormWrapper>
      </form>
    </NeumorphismBase>
  );
}

export default CommentForm;
