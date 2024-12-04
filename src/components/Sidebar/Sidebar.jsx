import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import StyledRoute from "../Route/Route";
import {
  Container,
  Image,
  Title,
  Sidebar,
  FlexContainer,
  Stack,
  ToggleButton,
} from "../../styles/components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const StyledSidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames("sidebar", { opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <ThemeProvider theme={color == "light" ? lightTheme : darkTheme}>
      <ToggleButton onClick={toggleSidebar} close={isOpened}>
        <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
      </ToggleButton>
      <Sidebar className={containerClassnames} close={isOpened}>
        <div>
          <FlexContainer>
            <Stack>
              <Image src={logo} alt="TensorFlow logo" />
              <Title>TensorFlow</Title>
            </Stack>
          </FlexContainer>
          <Container>
            {routes.map((route) => (
              <StyledRoute key={route.title} route={route} action={goToRoute} />
            ))}
          </Container>
        </div>
        <Container>
          {bottomRoutes.map((route) => (
            <StyledRoute key={route.title} route={route} action={goToRoute} />
          ))}
        </Container>
      </Sidebar>
    </ThemeProvider>
  );
};

StyledSidebar.propTypes = {
  color: PropTypes.string,
};

export default StyledSidebar;
