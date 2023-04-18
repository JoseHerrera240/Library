import ButtonMenu from "../ButtonMenu";
import buy from '../../Assets/Icons/buy.png'
import rent from '../../Assets/Icons/rent.png'
import './UserHome.sass'

let library = [
  {
    id: '1',
    image: 'https://www.adobe.com/es/express/create/cover/media_18d86248e8c6c00f18e7461e58ee5291a8485f45f.jpeg?width=400&format=jpeg&optimize=medium',
    title: 'behind you',
    description: 'The story narrates three months of the life of the colonel and his wife who live, mired in poverty and misery, in a small tropical town in Colombia.',
    gender: 'terror',
    price: '100',
    viability: 'true'
  },
  {
    id: '2',
    image: 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg',
    title: 'behind you',
    description: 'The story narrates three months of the life of the colonel and his wife who live, mired in poverty and misery, in a small tropical town in Colombia.',
    gender: 'terror',
    price: '100',
    viability: 'true'
  },
  {
    id: '3',
    image: 'https://template.canva.com/EADwi4xAG6I/1/0/256w-JBWCAd5q564.jpg',
    title: 'behind you',
    description: 'The story narrates three months of the life of the colonel and his wife who live, mired in poverty and misery, in a small tropical town in Colombia.',
    gender: 'terror',
    price: '100',
    viability: 'true'
  }
]

//en el usuario nos falta crear bastantes cosas
// primero sería un carrito que el pueda agregar los libros si los va a comprar y tambien en el 
//carrito pueda agregar los que va a rentar
//contar con metodos de pagos(no funcionales)
//debe tener filtros de busqueda, diferenciados por categoria 
// tambien debe contar con una opción de ver más 


const userHome = () => {
  console.log(library)
  return (
    <div>
      <section className="navBarGrid">
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
      </section>
      <section className="containerCardsGrid">
        {library.length > 0 ?
          library.map(function (value) {
            return (
              <div className="cardGrid" key={value.id}>
                <img src={value.image} alt="" />
                <h1 className="title" >{value.title}</h1>
                <p className="gender">Gender: {value.gender}</p>
                <p className="description">{value.description}</p>
                <p className="price">Price: ${value.price}</p>
                <button className="buy"><img src={buy} alt="buy" /></button>
                <button className="rent"><img src={rent} alt="rent" /></button>
              </div>
            )
          })
          :
          <p>Not found</p>

        }


      </section>
    </div>
  );
};

export default userHome 