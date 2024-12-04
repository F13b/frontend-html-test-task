import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Route, Text } from "../../styles/components";

const StyledRoute = (props) => {
  const { action, route } = props;

  return (
    <Route
      key={route.title}
      onClick={() => {
        action(route.title);
      }}
    >
      <FontAwesomeIcon icon={route.icon} width={"50px"} />
      <Text>{route.title}</Text>
    </Route>
  );
};

StyledRoute.propTypes = {
  action: PropTypes.func,
  route: PropTypes.object,
};

export default StyledRoute;
