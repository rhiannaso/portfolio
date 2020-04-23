import React, { Component } from 'react';
import GG from '../Images/golden_gate.jpg';
import PointLobos from '../Images/point_lobos.jpg';
import RCMH from '../Images/rcmh.jpg';
import IV from '../Images/iv.jpg';
import LoneTree from '../Images/lone_tree.jpg';
import NYC from '../Images/new_york.jpg';
import Laguna from '../Images/laguna.jpg';
import GC from '../Images/grand_canyon.jpg';
import SD from '../Images/san_diego.jpg';

export class Images extends Component {
  /*enlarge = (img_obj) => {
    var enlargedImg = document.getElementsByClassName('big'+img_obj.className)[0];
    var lightbox = document.getElementsByClassName('box'+img_obj.className)[0];
    lightbox.style.display = 'flex';
    enlargedImg.src = img_obj.src;

    window.onclick = function(event) {
      if (event.target.className === 'lightbox') {
        lightbox.style.display = 'none';
      }
    }
  }*/
  render() {
    return (
      <div className='content'>
        <div className='img-container'>
          <div className='img-child'>
            <img src={GG} className='01' onclick='enlarge(this)' alt='Golden Gate Bridge'/>
            <div className='caption'>
              I took this photo when my family and I visited 
              San Francisco over winter break this year.
            </div>
          </div>
          <div className='box01 lightbox' onclick='close(this)'>
            <img className='lightbox-content big01' alt='Enlarged Golden Gate Bridge'/>
          </div>
          <div className='img-child'>
            <img src={PointLobos} className='02' onclick='enlarge(this)' alt='Point Lobos'/>
            <div className='caption'>
              When my family took a trip along California's
              coast, I took this photo at Point Lobos.
            </div>
          </div>
          <div className='box02 lightbox' onclick='close(this)'>
            <img className='lightbox-content big02' alt='Enlarged Point Lobos'/>
          </div>
          <div className='img-child'>
            <img src={RCMH} className='03' onclick='enlarge(this)' alt='Radio City Music Hall'/>
            <div className='caption'>
              I took this photo back in 2017 when I visited
              New York before college.
            </div>
          </div>
          <div className='box03 lightbox' onclick='close(this)'>
            <img className='lightbox-content big03' alt='Enlarged Radio City Music Hall'/>
          </div>
          <div className='img-child'>
            <img src={IV} className='04' onclick='enlarge(this)' alt='Isla Vista Sunset'/>
            <div className='caption'>
              During Welcome Week this past year, I watched
              the sunrise with my friend and took this photo.
            </div>
          </div>
          <div className='box04 lightbox' onclick='close(this)'>
            <img className='lightbox-content big04' alt='Enlarged Isla Vista Sunset'/>
          </div>
          <div className='img-child'>
            <img src={LoneTree} className='05' onclick='enlarge(this)' alt='Lone Tree Point'/>
            <div className='caption'>
              This photo was taken when my family and I drove
              through Pebble Beach's scenic 17-mile drive.
            </div>
          </div>
          <div className='box05 lightbox' onclick='close(this)'>
            <img className='lightbox-content big05' alt='Enlarged Lone Tree Point'/>
          </div>
          <div className='img-child'>
            <img src={NYC} className='06' onclick='enlarge(this)' alt='New York Buildings'/>
            <div className='caption'>
              I took this photo from the Top of the Rock in 
              New York. The view was pretty amazing!
            </div>
          </div>
          <div className='box06 lightbox' onclick='close(this)'>
            <img className='lightbox-content big06' alt='Enlarged New York Buildings'/>
          </div>
          <div className='img-child'>
            <img src={Laguna} className='07' onclick='enlarge(this)' alt='Tablerock Beach'/>
            <div className='caption'>
              When my friends and I visited Tablerock Beach
              in Laguna, I captured this photo.
            </div>
          </div>
          <div className='box07 lightbox' onclick='close(this)'>
            <img className='lightbox-content big07' alt='Enlarged Tablerock Beach'/>
          </div>
          <div className='img-child'>
            <img src={GC} className='08' onclick='enlarge(this)' alt='Grand Canyon'/>
            <div className='caption'>
              During last year's winter break, I took this
              picture while on vacation with my family.
            </div>
          </div>
          <div className='box08 lightbox' onclick='close(this)'>
            <img className='lightbox-content big08' alt='Enlarged Grand Canyon'/>
          </div>
          <div className='img-child'>
            <img src={SD} className='09' onclick='enlarge(this)' alt='San Diego'/>
            <div className='caption'>
              I visited my friends in San Diego during last 
              year's spring break (what a different time it 
              was!) and took this picture.
            </div>
          </div>
          <div className='box09 lightbox' onclick='close(this)'>
            <img className='lightbox-content big09' alt='Enlarged San Diego'/>
          </div>
        </div>
      </div>
    );
  }
}
export default Images;