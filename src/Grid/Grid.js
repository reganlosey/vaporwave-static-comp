import './Grid.scss'
import Card from '../Card/Card'
import images from '../images'



const Grid = () => {
  const imgCards = images.map((img) => {
    return (
    <Card
      key={Math.floor(Math.random() * Date.now())}
      img={img}
      />
    )
  })
  return (
    <section className="grid-wrapper">
      <div className="grid">
      {imgCards}
      </div>
    </section>
  )



}

export default Grid;