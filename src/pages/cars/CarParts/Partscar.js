import React from 'react'
import "./partcars.css"

function Partscar() {
  return (
    <>
     
     <div className="boxparts">
        <h1 className="box-h1">AUTODOC car parts catalogue</h1>
        <div className="list_ersats_n list-ersatz-n--index">
            <ul class="expand list_ersats_row">
                <li className='ctg no-scroll-top'>
                    <div className="item">
                        <div className="image">
                        
                        <img src="https://media.gettyimages.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.jpg?s=612x612&w=gi&k=20&c=awd-KrLiALOhoDkrJtFVdyuoDSpDzWHCCpw3vJ4mi50=" alt="Tyres from top manufacturers at super price" title="Car tyres" height="130" style={{height:'100px'}} class=" lazyloaded" />
                        <span className='name'>Tyres</span>
                        </div>
                    </div>
                    <div className="popup_ersats">
                    <div class="white_bot">
                        <ul className="list_links">
                            <li id='category-23'>
                                <a href="">
                                    <img src="https://www.kwik-fit.com/assets/blog/change_back_to_summer_tyres_montage_header_kwikfit.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
     </div>
    
    </>
  )
}

export default Partscar