import Link from "next/link";
import { motion } from "framer-motion";

const Links = () => (
  <motion.div className="grid">
    <Link href="/docs">
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
    </Link>

    <Link href="/learn">
        <h2>Learn &rarr;</h2>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
    </Link>

    <Link href="/examples">
        <h2>Examples &rarr;</h2>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
    </Link>

    <Link href="/deploy">
        <h2>Deploy &rarr;</h2>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
    </Link>
  </motion.div>
);

export default Links;
