import { CenterFocusStrong } from '@material-ui/icons';
import React,{useEffect,useState} from 'react'

function ListElement({sr,p,ltp,bsp,diff,sav}) {

    const [color, setcolor] = useState("#6CCACB");

    useEffect((diff) => {
        diff<0 ? setcolor("#DC6F6B") : setcolor("#6CCACB")
    })

    return (
        <div style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            margin:"10px",
            justifyContent:"space-evenly",
            height:"fit-content",
            padding:"10px",
            width:"100%",
            backgroundColor:"#f8f9fa",
            borderRadius:"5px",
        }}>
            <div style={{
              color:"#0C0F48",

            }}>
                {sr}
            </div>  

            <div style={{
              color:"#0C0F48",

            }}>
                {p}
            </div>

            <div style={{
              color:"#0C0F48",

            }}>
                ₹{ltp}
            </div>

            <div style={{
              color:"#0C0F48",

            }}>
                ₹{bsp}
            </div>

            <div style={{
              color:color,

            }}>
                {diff}%
            </div>

            <div style={{
              color:color,

            }}>
                ₹{sav}
            </div>
        </div>
    )
}

export default ListElement
