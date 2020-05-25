import Layout from '../components/Layout'
import PostList from "../components/PostList";
import getPosts from "../utils/getPosts";

const Blog = ({posts, title, description, ...props }) => {
  return (
      <>
        <Layout pageTitle={title} description={description}>
          <h1 className="title">Blog</h1>
          <main>
            <PostList posts={posts} />
          </main>
        </Layout>
        <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
      </>
  )
}

export default Blog

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
