import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.js";

const IconButton = function IconButton({
  id,
  title,
  children,
  target,
  ...rest
}) {
  const rel = target === "_blank" ? "noopener noreferrer" : null;
  return (
    <Tooltip id={id} title={title} placement="top">
      <Button size="lg" rel={rel} justIcon target={target} {...rest}>
        {children}
      </Button>
    </Tooltip>
  );
};

IconButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  target: PropTypes.string.isRequired
};

export default IconButton;
