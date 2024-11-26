import { Container, CountText, Rosary, IdText, MainText } from "./styled";
import { useCountController } from "./hooks";
import { useTelegram } from "context/telegram";

function Home() {
  const { id, firstName } = useTelegram();
  const { handleIncrease, recitation, elementRef, degRotation } =
    useCountController();

  return (
    <Container>
      <MainText>
        <CountText>{recitation}</CountText>
        <IdText>user-id:{id}</IdText>
        <IdText>firstName:{firstName}</IdText>
      </MainText>
      <Rosary
        degRotation={degRotation}
        ref={elementRef}
        onClick={handleIncrease}
      >
        📿
      </Rosary>
    </Container>
  );
}

export default Home;
