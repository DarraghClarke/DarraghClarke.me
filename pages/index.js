import Layout from '../components/Layout'
import React from "react";


const Index = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <p>I'm a recent UCD Computer Science Graduate based in Ireland.<br/>
        I primarily work with Java, but have done some javascript and Ruby. <br/>
        This Site serves as a blog and also highlights some project work.</p>

        <a href="http://github.com/DarraghClarke/">
          <i className="fab fa-github-square fa-4x"></i>
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
