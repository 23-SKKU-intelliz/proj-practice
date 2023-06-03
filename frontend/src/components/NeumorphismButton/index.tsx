import { ReactElement } from "react";
import { StyledNeumorphismButton } from "src/components/NeumorphismButton/styles";

interface Props {
  children: ReactElement | ReactElement[] | string;
  type: "button" | "submit" | "reset" | undefined;
}

function NeumorphismButton({ children, type }: Props) {
  return (
    <StyledNeumorphismButton type={type}>{children}</StyledNeumorphismButton>
  );
}

export default NeumorphismButton;
