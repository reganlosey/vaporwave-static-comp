import './Card.scss'


const Card = ({ img }) => {
  console.log(typeof img)
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-txt">
        <h1>Views</h1>
        <p>02</p>
        </div>
        <img className="card-header-img" src={img} />
      </div>
      <div className="card-main-text">


      </div>
    </article>
  )



}

export default Card;