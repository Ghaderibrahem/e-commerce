import Carousel from "../carousel";

function CardComponent() {
  return (
    <div
      class="card d-flex flex-row"
      style={{ borderRadius:'1rem', height: "12rem" }}
    >
      <Carousel width="16rem" height= "12rem"/>
      <div class="card-body">
        <h5 class="card-title" style={{marginBottom:'15px'}}>Product1</h5>
        <div class='d-flex flex-row justify-content-between'>
          <div  class='d-flex flex-column'>
            <h6 class="card-title">Category</h6>
            <h6 class="card-title">Product1</h6>
          </div>
          <div   class='d-flex flex-column'>
            <h6 class="card-title">Description</h6>
            <h6 class="card-title">Product1</h6>
          </div>
          <div  class='d-flex flex-column'>
            <h6 class="card-title">Price</h6>
            <h6 class="card-title">Product1</h6>
          </div>
        </div>
        <div style={{width:'100%', height:'2px', backgroundColor:'gray', margin:'15px 0'}}></div>
         <div class='d-flex justify-content-end'>
        <button class="btn btn-primary ">Add to cart</button>
        </div>
        
      </div>
    </div>
  );
}

export default CardComponent;
