import styled from "styled-components";

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.close ? "15%" : "2.5%")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 1s;
  padding: 1rem;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.background};
`;

const Title = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.text};
`;

const Text = styled.span`
  margin-left: 1rem;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Route = styled.div`
  padding: 0.5rem 0;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) => props.theme.text};
  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.textHover};
  }
  &:active: {
    background-color: ${(props) => props.theme.active};
    color: ${(props) => props.theme.textActive};
  }
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  margin: 1rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: ${(props) => (props.close ? "17%" : "5%")};
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: ${(props) => props.theme.arrow};
  background-color: ${(props) => props.theme.button};
  transition: 1s;
  &:active: {
    background-color: ${(props) => props.theme.buttonActive};
  }
`;

export {
  Sidebar,
  Title,
  Text,
  Image,
  Route,
  Stack,
  Container,
  FlexContainer,
  ToggleButton,
};
