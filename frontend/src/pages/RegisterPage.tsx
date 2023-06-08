import NeumorphismBase from "src/components/NeumorphismBase";
import PageWrapper from "src/components/PageWrapper";
import NeumorphismButton from "src/components/NeumorphismButton";
import RegisterForm from "src/components/RegisterForm";
import axios from "axios";
import { Link } from "react-router-dom";

function RegisterPage() {
  const articles = axios.get("http://127.0.0.1:8000/api/articles/");
  return (
    <PageWrapper>
      <h1>RegisterPage</h1>
      <Link to="/">
        <NeumorphismButton>Go to Main</NeumorphismButton>
      </Link>
      <NeumorphismBase>
        <p>
          로그인 기능이 구현되어 있지 않아 단순히 유저를 추가하는 기능만
          있습니다.
        </p>
      </NeumorphismBase>
      <NeumorphismBase>
        <RegisterForm />
      </NeumorphismBase>
    </PageWrapper>
  );
}

export default RegisterPage;
