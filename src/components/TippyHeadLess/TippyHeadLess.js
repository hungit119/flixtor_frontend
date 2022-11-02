import Tippy from "@tippyjs/react/headless";
import React, { useState } from "react";
import PropTypes from "prop-types";
const TippyHeadLess = ({ children, menuTippy, position = "bottom" }) => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Tippy
      visible={visible}
      interactive
      onClickOutside={hide}
      placement={position}
      render={(attrs) => (
        <div tabIndex={-1} {...attrs}>
          {menuTippy}
        </div>
      )}
    >
      <div onClick={visible ? hide : show}>{children}</div>
    </Tippy>
  );
};
TippyHeadLess.propTypes = {
  children: PropTypes.node.isRequired,
  menuTippy: PropTypes.node.isRequired,
  position: PropTypes.string,
};
export default TippyHeadLess;
