import React, { Fragment } from 'react';
import './Products.css'

function RelatedProducts() {
  return (
    <Fragment>
    <div className='zipper-container'>
      <div className='zipper-element'>
        <img src="/ribbon.jpg" alt="st sign"/>
      </div>
      <div className='zipper-text'>
        <h2>Ribbon</h2>
        <p>“HUG SNUG ½” SEAM BINDING” is available in 200 colors and ¼” DRESS RIBBON in 21 colors.  
          All are in stock at our New York Garment Center warehouse.  
          This versatile product is 100% washable and dry cleanable rayon with a woven edge and is put-up 100 yards to a roll.  
          Dye to match color capabilities exist both in Asia and the U.S.</p>
      </div>
    </div>
      <hr></hr>
      <div className='zipper-container'>
      <div className='zipper-element'>
        <img src="/underwire.png" alt="st sign"/>
      </div>
      <div className='zipper-text'>
      <h2>Boning</h2>
        <p>Boning is used in bustiers and strapless garments for support in the bust or torso.  
          Bone Soir™  is an innovative boning material that allows for efficient sew- through processing, reducing time and cost of application.  
          Both black and white are stocked in widths of 1/4”, 5/16” and 7/16”.  
          Covered boning is also available in black and white and stocked for immediate delivery.  
          Fused boning in black and white is a special order based on one week delivery.</p>
      </div>
    </div>
    <hr></hr>
      <div className='zipper-container'>
      <div className='zipper-element'>
        <img src="/fashion_ave.jpg" alt="st sign"/>
      </div>
      <div className='zipper-text'>
        <h2>Thread</h2>
        <p>AGH carries a full line of sewing thread for all applications and industries. 
          From cotton and polyester to silk and metallic, our LEADER THREAD Division represents years of experience in helping to determine the best product for your purpose.</p>
      </div>
    </div>
    <hr></hr>
    <div className='zipper-container'>
      <div className='zipper-element'>
        <img src="/accessories.png" alt="st sign"/>
      </div>
      <div className='zipper-text'>
        <h2>Lingerie & Swimwear Accessories</h2>
        <p>AGH Trimsource has years of experience in the design and production of “Customized Metal Accessories”. 
          These products are manufactured of the finest available materials and created to function within the rigorous guidelines established for these industries.  
          AGH Design Services are available to aid in the selection of the best product for any given application.</p>
      </div>
    </div>
    </Fragment>
  )
}



export default RelatedProducts;