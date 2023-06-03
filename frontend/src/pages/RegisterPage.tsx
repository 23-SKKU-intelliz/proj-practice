import NeumorphismBase from "src/components/NeumorphismBase";
import Wrapper from "src/components/Wrapper";
import NeumorphismButton from "src/components/NeumorphismButton";
import RegisterForm from "src/components/RegisterForm";

function RegisterPage() {
  return (
    <Wrapper>
      <h1>RegisterPage</h1>
      <NeumorphismBase>
        <p>
          로그인 기능이 구현되어 있지 않아 단순히 유저를 추가하는 기능만
          있습니다.
        </p>
      </NeumorphismBase>
      <NeumorphismBase>
        <RegisterForm />
      </NeumorphismBase>
    </Wrapper>
  );
}

export default RegisterPage;
