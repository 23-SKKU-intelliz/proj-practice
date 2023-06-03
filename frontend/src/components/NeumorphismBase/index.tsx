import { StyledNeumorphismBase } from "src/components/NeumorphismBase/styles";
import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
}

function NeumorphismBase({ children }: Props) {
  return <StyledNeumorphismBase>{children}</StyledNeumorphismBase>;
}

export default NeumorphismBase;
