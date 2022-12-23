import { TouchableOpacityProps } from "react-native";
import { Title, Container, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...rest}: Props){
  return (
      <Container
        isActive={isActive}
        {...rest}
      >
        <Title>
          {title}
        </Title>
      </Container>
  );
}