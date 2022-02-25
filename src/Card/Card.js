import './Card.scss'


const Card = ({ img }) => {
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-txt">
          <h1>Views</h1>
          <p>02</p>
        </div>
        <img className="card-header-img" src={img} />
      </div>
      <div className="card-main-txt">
        <p>Recipient's Name Here</p>
        <p>Monday, 01/01/1999 at 11:11 AM</p>
        <p>
          <a href="https://www.youtube.com/watch?v=-V9ku_9p3fo" target="_blank" rel="noreferrer" className="link">https://www.youtube.com/watch?v=-V9ku_9p3fo</a>
        </p>
        <p>Playlist</p>
        <p>Name of Playlist</p>
        <p>Attachments</p>
        <p>04</p>
      </div>
    </article >
  )



}

export default Card;