import React from "react";
import { useRouter } from "next/router";
import Transition from "../Transition";

import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.layout}>
      <header>
        <h1>Header</h1>
      </header>

      <Transition location={router.pathname}>
        <main className={styles.main}>{children}</main>
      </Transition>
    </div>
  );
};

export default Layout;
