import Head from 'next/head'

import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
          <script src="https://kit.fontawesome.com/7671c956b4.js" crossOrigin="anonymous"></script>
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
 

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
          color: #445566;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
        }

        a {
          color: #00a395;
        }

        .content {
          padding: 2rem 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .fa-github-square {
        color: black;
        }
        p{        
          font-size: 20px;
          text-align: center;
          font-family: 'Roboto', sans-serif;
         }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          padding: 0 5px;
          height: 1rem;
        }
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>

      </footer>
    </>
  )
}
