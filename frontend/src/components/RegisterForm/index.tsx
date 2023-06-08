import { StyledRegisterForm } from "src/components/RegisterForm/styles";
import { FormEvent } from "react";
import NeumorphismButton from "src/components/NeumorphismButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = e.currentTarget
      .elements as typeof e.currentTarget.elements;
    const usernameInput = formElements.namedItem(
      "username"
    ) as HTMLInputElement;
    const emailInput = formElements.namedItem("email") as HTMLInputElement;

    await axios
      .post("http://127.0.0.1:8000/api/users/", {
        username: usernameInput.value,
        email: emailInput.value,
      })
      .then((response) => {
        navigate("/posts");
      });
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      <div>
        username: <input type="text" name="username" />
      </div>
      <div>
        email: <input type="text" name="email" />
      </div>
      <NeumorphismButton type="submit">등록</NeumorphismButton>
    </StyledRegisterForm>
  );
}

export default RegisterForm;
