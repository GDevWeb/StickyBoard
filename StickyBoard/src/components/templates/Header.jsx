import "../../sass/header.scss";

function Header() {
    const content = "StickyBoard App"
    const slogan =  "Organisez vos idées avec facilité !";

  return (
    <header>
    <h1>{content}</h1>
    <h2>{slogan}</h2>
    </header>
  )
}

export default Header