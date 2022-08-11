import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
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

export default TippyHeadLess;
