
import "./Header.css"
export const Header = ({info}) => {

// console.log(info.links[0].text)
  return (
    <div class="header">

    <div>
      <img class="logo" src={info.logo.img} alt="imagen" />
    </div>
    <div class="center">
    <div>
        {info.links.map((text, index) => (
          <a href={text.url} key={index}>{text.text}</a>
        ))}
      </div>
        <div>
        {info.menu.map((text, index) => (
          <a href={text.url} key={index}>{text.text}</a>
        ))}
        <img src="" alt="busqueda" />
        </div>
      </div>
        <div>
          <img src="" alt="carrito" />
          <img src="" alt="user"/>

        </div>    
    
    </div>

  )
}
