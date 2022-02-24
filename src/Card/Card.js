import './Card.scss'


const Card = ({ img }) => {
  console.log(typeof img)
  return (
    <article className="card">
      <div className="card-header">
        <img className="card-header-img" src={img} />
        <h1>Views : 2</h1>
        Card header
        shares: 2
      </div>


    </article>
  )



}

export default Card;