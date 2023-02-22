import React,{useState,useEffect} from 'react'
import { GrFormNextLink } from 'react-icons/gr';
import PersonInfo from './PersonInfo';
import Appointment from './Appointment';
import StepperPage from './StepperPage';
import DetailsPage1 from './DetailsPage1';
import DetailsPage2 from './DetailsPage2';
import DetailsPage3 from './DetailsPage3';

const MainPage = () => {

  const [count,setcount]=useState(1)
  
  
   
  return (
    <div>
        <div style={{display:"flex"}}>
            <div style={{width:"20%"}}>
                <PersonInfo/>
            </div>
            <div style={{width:"75%",marginLeft:"25px"}}>
                <div>
                    <StepperPage count={count}/>
                </div>
                <div>
                    {
                        count===1 ? <DetailsPage1 count={count}/>:null
                    }
                    {
                        count===2 ? <DetailsPage2/>:null
                    }
                    {
                        count===3 ? <DetailsPage3/>:null
                    }
                     
               </div>
               {
                count<=2 ?
               

               <div style={{display:"flex",position:"absolute",left:"90%",marginTop:"-15px",cursor:"pointer"}} onClick={()=>{
               
                    if(count<3){
                        setcount(count+1)
                    }
                    else if(count>3){
                        setcount(1)
                    }
               }}>
               
                <p style={{fontWeight:"bold",color:"rgb(42,26,83)"}}>Next Step</p>
                <GrFormNextLink style={{marginTop:"15px",fontSize:"25px",backgroundColor:"rgb(247,225,121)",borderRadius:"100%",marginLeft:"15px"}}/>
               </div>:null
}
               
                 
            </div>
           
        </div>
       
    </div>
  )
}

export default MainPage