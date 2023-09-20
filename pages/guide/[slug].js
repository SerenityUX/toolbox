import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

// Import all components from the ./components folder
function importAll(r) {
  let components = {};
  r.keys().forEach((key) => {
    const componentName = key.replace(/^\.\/(.*)\.\w+$/, '$1');
    components[componentName] = r(key).default;
  });
  return components;
}

const components = importAll(require.context('/components', false, /\.js$/));

// Fetch .md files during build time
export async function getStaticPaths() {
  const guidesPath = path.join(process.cwd(), './guides');
  const filenames = fs.readdirSync(guidesPath);
  
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));
  
  return {
    paths,
    fallback: false,
  };
}

// Fetch .md file content based on slug
export async function getStaticProps({ params }) {
  const guidesPath = path.join(process.cwd(), './guides');
  const filePath = path.join(guidesPath, `${params.slug}.md`);
  const source = fs.readFileSync(filePath, 'utf8');
  
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

export default function Guide({ source }) {
  return <MDXRemote {...source} components={components} />;
}
