import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
        <>
        <div >
        <nav>
       <div style={{border:"2px solid black", textAlign:"center",fontSize:"20px",height:"auto", color: "white",
               backgroundColor: "DodgerBlue",padding: "10px",}}>
                        <h1>Online Banking </h1>
           </div>

          <ul style={{border:"2px solid black",marginTop:"-1px", fontSize:"20px", height:"Auto", minHeight:"450px",flexWrap:"wrap",alignContent:"center",
                   listStyle:"none",textDecoration: 'none',paddingTop:"30px",maxWidth:"200px"}}>

           <button style={{backgroundColor:"black",padding:"10px"}}><li><Link to="/ManagementSignup" style={{textDecoration:"none",color:"white"}}>ManagementSignup</Link></li></button>
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px",fontSize:"16px"}}><li><Link to="/CustomerSignup" style={{textDecoration:"none",color:"white"}} >CustomerSignup</Link></li></button> <br /> 
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px",fontSize:"16px"}}><li><Link to="/VerifyOTP" style={{textDecoration:"none" ,}}>VerifyOTP</Link></li></button> <br /> 
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/Customerlogin" style={{textDecoration:"none",}}>Customerlogin</Link></li></button>  <br />
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/CreateAccount" style={{textDecoration:"none",}}>CreateAccount</Link></li></button>  <br />
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/" style={{textDecoration:"none",}}>ManagementLogin</Link></li></button>  
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/ManagementFetchAccounts" style={{textDecoration:"none",}}>ManagementFetchAccounts</Link></li></button>  
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/ManagementStatus" style={{textDecoration:"none",}}>ManagementStatus</Link></li></button>  
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/CustomerViewAccount" style={{textDecoration:"none",}}>CustomerViewAccount</Link></li></button>  
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/CustomerCheckBalance" style={{textDecoration:"none",}}>CustomerCheckBalance</Link></li></button> <br /> 
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/Deposit" style={{textDecoration:"none",}}>Deposit</Link></li></button>  <br />
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/Withdraw" style={{textDecoration:"none",}}>Withdraw</Link></li></button>  <br />
           <button style={{marginTop:"10px",backgroundColor:"black",padding:"10px"}}><li><Link to="/ViewTransactions" style={{textDecoration:"none",}}>ViewTransactions</Link></li></button>  
          </ul>
      </nav>
        </div>
              
</>
  )
}

export default Home