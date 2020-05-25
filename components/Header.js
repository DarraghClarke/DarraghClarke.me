import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="border">
                    <nav className="nav" role="navigation" aria-label="main navigation">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </nav>
                </div>
            </header>
            <style jsx>{`
        header {
          width: 100%;
          height: 150px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url("/floralbg1.jpg");
        }
        .border {
          background-color: #3f4545;
          color: #F0F3BD;
          padding: 13px 0px 13px 30px;
          backdrop-filter: blur(5px);
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.5rem;
          spacing: 10px
        }
        nav a {
        margin-right: 30px;
          color: #F0F3BD;
          text-decoration: none;

        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
        </>
    )
}
