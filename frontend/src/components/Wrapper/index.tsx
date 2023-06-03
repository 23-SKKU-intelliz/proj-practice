import { ReactElement } from "react";
import { StyledWrapper } from "src/components/Wrapper/styles";

interface Props {
  children: ReactElement | ReactElement[];
}

function Wrapper({ children }: Props) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
