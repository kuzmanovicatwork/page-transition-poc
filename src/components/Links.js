import { createRef } from "react";
import Link from "next/link";

import Deploy from "../pages/deploy";
import Docs from "../pages/docs";
import Examples from "../pages/examples";

const Links = () => {
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

  return routes.map((route) => (
    <Link key={route.path} href={route.path}>
      {route.name}
    </Link>
  ));
};

export default Links;
