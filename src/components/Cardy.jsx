import imageCard from '../assets/learns.jpg'

function Cardy() {
  return (
    
      <div className="card card-compact w-96 bg-base-100 shadow-xl align-top">
          <figure><img src={imageCard} alt="Shoes"/></figure>
          <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
                
          </div>
      </div>
    
  )
}

export default Cardy