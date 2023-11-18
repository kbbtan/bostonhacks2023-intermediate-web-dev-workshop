function Card({ title, description, price }) {
  return (
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <small class="text-body-secondary">${price}</small>
        </div>
    </div>
  )
}

export default Card;