import React, { Fragment } from 'react';
import './Products.css'
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

function Zipper() {
  return (
    <Fragment>
    <Card className='zipper-container'>
      <div className='zipper-element'>
        <img src="/EXCELLA_m.jpg" alt="YKK Metal Zipper"/>
      </div>
      <div className='zipper-text'>
        <h2>Metal Zippers</h2>
        <p>	AGH has developed a wide variety of “Jewelry Like” and "High Polished" finishes for our metal zipper line.  
          Along with our Brass, Nickel, Antique Brass, Antique Nickel, Dark Nickel and Black Oxide finishes, we have developed both a Copper and Antique Copper surface effect.  
          The newest additions to our line are the Golden and Platinum enhanced metal finish.  
          All metal zippers are available in #3, #5, #8 and #10 gauges allowing complete flexibility in your product development as well as seamless integration with our standard and customized pull/slider collection.</p>
      </div>
    </Card>

      <Card className='zipper-container'>
      <div className='zipper-element'>
        <img src="/VISLONStandard_m.jpg" alt="YKK Plastic Zipper"/>
      </div>
      <div className='zipper-text'>
      <h2>Plastic Zippers</h2>
        <p>	Plastic Zippers are available in all gauges and configurations from coil to molded plastic; clear synthetic resin to gold or platinum mirror finish; multicolored individual teeth to metallic looking “sputtering” coil.  Mixing and matching the three integral parts of the “ZIPPER TRIAD” – Slider / Element / Tape – offers the designer an expanded capacity for individual customization.</p>
      </div>
    </Card>
    </Fragment>
  )
}



export default Zipper;