import { ReactElement } from "react";
import { StyledWrapper } from "src/components/PageWrapper/styles";

interface Props {
  children: ReactElement | ReactElement[];
}

function PageWrapper({ children }: Props) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default PageWrapper;
