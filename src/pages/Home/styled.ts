import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem;
  height: 90dvh;
`;

const MainText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const CountText = styled.strong`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  min-width: 4.125rem;
  text-align: center;
  user-select: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.9rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.secondaryText}`};
`;

const IdText = styled.pre`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  margin: unset;
  user-select: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.9rem;
  border: ${({ theme }) => `0.063rem solid ${theme.colors.primaryText}`};
`;

const Rosary = styled.div.withConfig({
  shouldForwardProp: (props) => !["degRotation"].includes(props),
})<{ degRotation: number }>`
  cursor: pointer;
  font-size: 10rem;
  rotate: ${({ degRotation }) => degRotation + "deg"};
  transition: 500ms ease-in-out;
`;

export { Container, CountText, Rosary, IdText, MainText };
