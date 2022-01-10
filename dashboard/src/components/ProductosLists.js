import React from 'react';
import propTypes from "prop-types";

function Mostrar(props){
    return(
        <React.Fragment>            
 

   {/* <body> 
  <div className="container products-wrapper"> 
  <div className="row">  
  <div className="col-12"> 
    
      <h2 className="products-title">{`id :${props.id}`}</h2>
    </div> 
   <div className="col-12 col-sm-6 col-lg-3"> 
   <section className="product-box"> 
        <a href="#">
          <figure className="product-box_image">
            <img  src={props.imagen} alt="imagen de producto" />
          </figure>
          <article className="product-box_data">
            <h2>{props.marca.nombre}</h2>
            <span>20% off </span>
       
            <i className="fas fa-truck" />
          </article>
        </a>
     </section> 
  </div>  
  </div>  
 </div>  
  </body>   */}
   {/* vemos boostrap */}

  






   <div className="col-12"> 
      <h2 className="products-title">{`id :${props.id}`}</h2>
    </div> 
   <div className="col-10 col-lg-4 mx-auto"> 
   <section className="product-box"> 
        <a href="#">
          <figure className="product-box_image">
            <img  src={props.imagen} alt="imagen de producto" />
          </figure>
          <article className="product-box_data">
            <h2>{props.marca.nombre}</h2>
            <span>20% off </span>
       
            <i className="fas fa-truck" />
          </article>
        </a>
     </section> 
  </div>  

  





  


   

 



 


        </React.Fragment>

    )
}
Mostrar.propTypes={ 
  nombre: propTypes.string,
  id: propTypes.number,
  imagen: propTypes.string,
  marca: propTypes.string
}

export default Mostrar;