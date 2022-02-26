import './Grid.scss'
import Card from '../Card/Card'
import images from '../images'
import shareArrow from '../assets/share_arrow.png'



const Grid = () => {
  const imgCards = images.map((img) => {
    return (
      <Card
        key={Math.floor(Math.random() * Date.now())}
        img={img}
        arrow={shareArrow}
      />
    )
  })
  return (
    <section className="grid-wrapper">
      <p className="share-text">Shares</p>
      <div className="grid">
        {imgCards}
      </div>
    </section>
  )



}

export default Grid;