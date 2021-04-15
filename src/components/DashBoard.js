import React from 'react'
import '../styles/DashBoard.css'

function DashBoard() {
    return (
        <div className="dashboard">
            <div >
                <div>10%</div>
                <h3/>
                <p>10 mins</p>
            </div>
            <div >
                <div>10%</div>
                <h3/>
                <p>10 mins</p>
            </div>
            <div >
            <p style={{fontSize:"50%"}}>The Indian rupee is the official currency of India.</p>
            <h3/>
                <div style={{fontSize:"200%",color:"#0C0F48"}}>₹10</div>
                <h3/>
                <p style={{fontSize:"50%"}}>The Indian rupee is the official currency of India. The rupee is subdivided into 100 paise</p>
            </div>
            <div >
                <div>10%</div>
                <h3/>
                <p>10 mins</p>
            </div>
            <div >
                <div>10%</div>
                <h3/>
                <p>10 mins</p>
            </div>
        </div>
    )
}

export default DashBoard
