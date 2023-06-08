import PageWrapper from "src/components/PageWrapper";
import NeumorphismButton from "src/components/NeumorphismButton";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <PageWrapper>
      <h1>Main Page</h1>
      <Link to="/register">
        <NeumorphismButton>Register</NeumorphismButton>
      </Link>
      <Link to="/posts">
        <NeumorphismButton>Post List</NeumorphismButton>
      </Link>
    </PageWrapper>
  );
}

export default MainPage;
