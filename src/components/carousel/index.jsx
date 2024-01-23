


const Carousel=({width='100%', height})=>{

    return(
        <div id="carouselExampleIndicators" class="carousel slide" style={{width, height}}>
  <div class="carousel-indicators">
    <button type="button" style={{width:'1rem', height:'1rem', borderRadius:'1rem', border:'0px'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" style={{width:'1rem', height:'1rem', borderRadius:'1rem', border:'0px'}}  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" style={{width:'1rem', height:'1rem', borderRadius:'1rem', border:'0px'}}  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{height, borderTopLeftRadius:'1rem', borderBottomLeftRadius:'1rem'}}>
    <div class="carousel-item active">
      <img src="https://i.imgur.com/eGOUveI.jpeg" class="d-block w-100" alt="https://i.imgur.com/eGOUveI.jpeg"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/eGOUveI.jpeg" class="d-block w-100" alt="https://i.imgur.com/eGOUveI.jpeg"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/eGOUveI.jpeg" class="d-block w-100" alt="https://i.imgur.com/eGOUveI.jpeg"/>
    </div>
  </div>
 
</div>
    )
}

export default Carousel