import ButtonMenu from "../ButtonMenu";
import portada from '../../Assets/portadas/portada.jpg'
import buy from '../../Assets/Icons/buy.png'
import rent from '../../Assets/Icons/rent.png'
import './UserHome.sass'

//'behind you', 'terror', 100, true 
//Faltaría la descripción

const userHome = () => {
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