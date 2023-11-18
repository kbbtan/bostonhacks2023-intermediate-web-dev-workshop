function Card({ title, description, price }) {
  return (
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">${price}</small></p>
        </div>
    </div>
  )
}

export default Card;