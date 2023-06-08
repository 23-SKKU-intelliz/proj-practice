import PageWrapper from "src/components/PageWrapper";
import NeumorphismButton from "src/components/NeumorphismButton";
import { Link } from "react-router-dom";
import NeumorphismBase from "src/components/NeumorphismBase";
import ArticleForm from "src/components/ArticleForm";

function ArticleWritePage() {
  return (
    <PageWrapper>
      <h1>Article Write Page</h1>
      <Link to="/posts">
        <NeumorphismButton>Go to List</NeumorphismButton>
      </Link>
      <ArticleForm />
    </PageWrapper>
  );
}

export default ArticleWritePage;
