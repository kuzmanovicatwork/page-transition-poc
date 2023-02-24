import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="about">Link To About</Link>
    </div>
  );
};

export default HomePage;
