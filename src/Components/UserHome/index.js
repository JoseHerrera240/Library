import ButtonMenu from "../ButtonMenu";
import portada from '../../Assets/portadas/portada.jpg'
import buy from '../../Assets/Icons/buy.png'
import rent from '../../Assets/Icons/rent.png'
import './UserHome.sass'

//'behind you', 'terror', 100, true 
//Faltaría la descripción
let library = [
    {id:'1', title: 'behind you', description:'The story narrates three months of the life of the colonel and his wife who live, mired in poverty and misery, in a small tropical town in Colombia.',gender: 'terror', price:'100', viability:'true'},
    {id:'2', title: 'behind you', description:'The story narrates three months of the life of the colonel and his wife who live, mired in poverty and misery, in a small tropical town in Colombia.',gender: 'terror', price:'100', viability:'true'},
    {id:'3', title: 'behind you', description:'The story narrates three months of the life of the colonel and his wife who live, mired in poverty and misery, in a small tropical town in Colombia.',gender: 'terror', price:'100', viability:'true'}
]

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
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                    <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
                <div className="cardGrid">
                    <img src={portada} alt="" />
                    <h1 className="title" >title:....</h1>
                    <p className="gender">Gender: terror</p>
                    <p className="description">description: ??? </p>
                    <p className="price">Price: $9999</p>
                      <button className="buy"><img src={buy} alt="buy"/></button>
                    <button className="rent"><img src={rent} alt="rent" /></button>
                </div>
            </section>
        </div>
    );
};

export default userHome 