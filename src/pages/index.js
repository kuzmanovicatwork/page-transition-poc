import { createRef } from "react";
import { useRouter } from "next/router";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Deploy from "./deploy";
import Docs from "./docs";
import Examples from "./examples";

const routes = [
  { path: "/", name: "Home", element: Deploy, nodeRef: createRef() },
  { path: "/docs", name: "Docs", element: Docs, nodeRef: createRef() },
  {
    path: "/examples",
    name: "Examples",
    element: Examples,
    nodeRef: createRef(),
  },
];

const Example = () => {
  const router = useRouter();

  const { nodeRef } = routes.find((route) => route.path === router.pathname);

  const Component = routes.find(
    (route) => route.path === router.pathname
  ).element;

  return (
    <div className="container">
      <SwitchTransition>
        <CSSTransition
          key={router.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <Component />
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Example;
