import NeumorphismBase from "src/components/NeumorphismBase";
import { StyledArticleFormWrapper } from "src/components/ArticleForm/styles";
import NeumorphismButton from "src/components/NeumorphismButton";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import axios from "axios";

function ArticleForm() {
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = e.currentTarget
      .elements as typeof e.currentTarget.elements;
    const userIdInput = formElements.namedItem("userId") as HTMLInputElement;
    const titleInput = formElements.namedItem("title") as HTMLInputElement;
    const contentInput = formElements.namedItem("content") as HTMLInputElement;

    await axios
      .post("http://127.0.0.1:8000/api/articles/", {
        title: titleInput.value,
        content: contentInput.value,
        user_id: userIdInput.value,
      })
      .then((response) => {
        navigate("/posts");
      });
  };
  return (
    <NeumorphismBase>
      <form onSubmit={handleSubmit}>
        <StyledArticleFormWrapper>
          <div>
            title: <input type="text" name="title" />
          </div>
          <div>
            userId: <input type="number" name="userId" />
          </div>
          <textarea rows={30} name="content" />
          <NeumorphismButton type="submit">submit</NeumorphismButton>
        </StyledArticleFormWrapper>
      </form>
    </NeumorphismBase>
  );
}

export default ArticleForm;
