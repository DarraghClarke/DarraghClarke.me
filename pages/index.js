import Layout from '../components/Layout'


const Index = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h2 className="title">About Me</h2>

        <p>I'm a recent UCD Computer Science Graduate based in Ireland.<br/>
        I Primarily work with Java, but have done some javascript and Ruby. <br/>
        This Site serves as a blog and also highlights some project work.</p>

        <a href="http://github.com/DarraghClarke/">
          <img src="/static/githubsmall.jpg" alt="My Personal Github Repo" align="center" target="_blank"></img>
        </a>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
