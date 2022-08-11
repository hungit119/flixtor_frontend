import Tippy from "@tippyjs/react/headless";
import { motion, useSpring } from "framer-motion";
import React from "react";

const TippyWrapper = ({ children, content, position, animation = false }) => {
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  const onMount = () => {
    scale.set(1);
    opacity.set(1);
  };

  const onHide = ({ unmount }) => {
    const cleanUp = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanUp();
        unmount();
      }
    });
    scale.set(initialScale);
    opacity.set(0);
  };
  return (
    <Tippy
      interactive
      placement={position}
      render={(attrs) => {
        if (animation) {
          return (
            <motion.div style={{ scale, opacity }} tabIndex={-1} {...attrs}>
              {content}
            </motion.div>
          );
        } else {
          return (
            <div style={{ scale, opacity }} tabIndex={-1} {...attrs}>
              {content}
            </div>
          );
        }
      }}
      animation={true}
      onMount={onMount}
      onHide={onHide}
    >
      {children}
    </Tippy>
  );
};

export default TippyWrapper;
