import React from 'react'
import bannerImg from '../utils/bannerhodlinfo.png'
import '../styles/Body.css'
import data from '../utils/Data.json'
import ListElement from './ListElement';

function Body() {

    const users=data;
    console.log(data)
    return (
        <div className="body">
            <div className="body__img">
                <img src={bannerImg} alt=""/>
            </div>
            <div className="body__list">
                <ListElement 
                sr={1}
                p={"Platform1"} 
                ltp="1000" 
                bsp="2000" 
                diff={500} 
                sav="1000" />
                <ListElement 
                sr={2}
                p={"Platform2" }
                ltp="1000" 
                bsp="2000" 
                diff={500} 
                sav="1000" />
                <ListElement 
                sr="3" 
                p="Platform1" 
                ltp="1000" 
                bsp="2000" 
                diff={-500 }
                sav="1000" />
                <ListElement 
                sr="4" 
                p="Platform1" 
                ltp="1000" 
                bsp="2000" 
                diff="500" 
                sav="1000" />
                <ListElement 
                sr="6" 
                p="Platform1" 
                ltp="1000" 
                bsp="2000" 
                diff="500" 
                sav="1000" />
                <ListElement 
                sr="7" 
                p="Platform1" 
                ltp="1000" 
                bsp="2000" 
                diff="500" 
                sav="1000" />
            </div>
            <div style={{
                position:"sticky",
                display:"flex",
                justifyContent:"space-evenly",  
                bottom:0,
                zIndex:999,
                width:"100%",
                backgroundColor:"#0C0F48",
                height:"50px"
            }}>
                <div style={{
                    marginTop:"10px",
                    background:'transparent',
                    borderRadius:"2px",
                    height:"fit-content",
                    padding:"5px",
                    fontSize:"15px",
                    border:"2px solid #6ccacb",
                    color:"#6ccacb",
                    alignContent:"center",
                    textAlign:"center",    
                }}>
                    Add Hodlinfo to home screen  
                </div>
            </div>
        </div>
    )
}

export default Body
