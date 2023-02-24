import { useRef } from "react";

import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const TIMEOUT = 500;

const getTransitionStyles = {
  entering: {
    position: `absolute`,
    transform: `translateX(calc(100% + 1rem))`,
  },
  entered: {
    transition: `transform ${TIMEOUT}ms ease-in-out`,
    transform: `translateX(0)`,
  },
  exiting: {
    transition: `transform ${TIMEOUT}ms ease-in-out`,
    transform: `translateX(calc(-100% - 1rem))`,
  },
};

const Transition = ({ children, location }) => {
  const nodeRef = useRef(null);

  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
        nodeRef={nodeRef}
      >
        {(status) => (
          <div
            ref={nodeRef}
            style={{
              width: "100%",
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
