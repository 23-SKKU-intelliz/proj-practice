import { ReactChildren, ReactElement } from "react";
import { StyledListWrapper } from "src/components/ListWrapper/styles";

interface Props {
  children?: ReactElement[];
}

function ListWrapper({ children }: Props) {
  return <StyledListWrapper>{children}</StyledListWrapper>;
}

export default ListWrapper;
