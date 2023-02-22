import React,{useState,useEffect} from 'react'
import '../Styles/DetailsPage1.css'
import { GrFormNextLink } from 'react-icons/gr';
import { AiFillStar } from 'react-icons/ai';

const DetailsPage1 = (props) => {
  
  const [Signatures,setSignatures]=useState(0)
  const [Files,setFiles]=useState(0)
  const [Signers,setSigners]=useState(0)
  const [Witness,setWitness]=useState("")
  return (
    <div>
      <div className='TwoParts'>

      <div className='AllBoxes'>
          <div className='Box'>
              <p className='BoxHeading'>Notary Signing Agent</p>
              <p className='BoxContent'>Suitable for those those who have purchased  brand new car</p>
              <div className='Price'>
                <p className='PriceValue'>35</p>
                <p className='PerYear'>per year</p>
              </div>
              <div className='ViewDetails'>
                <p className='ViewDetailsText'>View details</p>
                <GrFormNextLink className='NextIcon'/>
              </div> 
          </div>

          <div className='Box'>
            <p className='BoxHeading'>Remote Online Notary</p>
            <p className='BoxContent'>Suitable for those who already have a valid third party cover</p>
            <div className='Price'>
                <div style={{display:"flex"}}>
                  <AiFillStar color='purple'/>
                  <p style={{color:"purple",fontWeight:"bold",marginTop:"0px",marginLeft:"10px"}}>Popular</p>
                </div>
                <p className='PriceValue' style={{marginTop:"0px"}}>35</p>
                <p className='PerYear'>per year</p>
            </div>
            <div className='ViewDetails' style={{marginTop:"-40px"}}>
                <p className='ViewDetailsText'>View details</p>
                <GrFormNextLink className='NextIcon'/>
            </div> 
          </div>

          <div className='Box'>
            <p className='BoxHeading'>Mobile General Notary</p>
            <p className='BoxContent'>Suitable for those who already have a valid third party cover</p>
            <div className='Price'>
                <p className='PriceValue'>35</p>
                <p className='PerYear'>per year</p>
            </div>
            <div className='ViewDetails'>
                <p className='ViewDetailsText'>View details</p>
                <GrFormNextLink className='NextIcon'/>
            </div> 
          </div>
      </div>


      <div className='CostBox'>
          
          <p className='CostHeading'>Calculate your cost for RON!</p>
          <div className='OptionAndInput'>
              <div>
                <p className='Options'>No of Extra Signatures</p>
                <p className='SubOptions'>please enter zero , if only one Signature is required</p>
              </div>
              <input type="text" className='CostInput' onChange={(e)=>setSignatures(e.target.value)}></input>
          </div>
          <div className='OptionAndInput'>
              <p className='Options'>How many files will you be <br></br>uploading in the session</p>
              <input type="text" className='CostInput' onChange={(e)=>setFiles(e.target.value)}></input>
          </div>
        <div className='OptionAndInput'>
              <p className='Options'>Number of Signers</p>
              <input type="text" className='CostInput' onChange={(e)=>setSigners(e.target.value)}></input>
        </div>
        <div className='OptionAndInput'>
          <div>
              <p className='Options'>Do you need Witness?</p>
              <p className='SubOptions'>Do not enter anything if yoy are bring your own Witness</p>
          </div>
          <input type="text" className='CostInput' onChange={(e)=>setWitness(e.target.value)}></input>
        </div>
         
          <p className='TotalCost'>Your approximate quote $59</p>
      </div>
    </div>

    </div>
  )
}

export default DetailsPage1