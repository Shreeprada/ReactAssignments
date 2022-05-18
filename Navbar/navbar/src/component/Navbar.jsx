import React from 'react';
const Navbar=()=>{
    return (
        <div style={{width:'90%',height:'auto',color:'white',backgroundColor:'black',margin:'auto',padding:'15px 60px',display:'flex',justifyContent:'space-between',marginLeft:'10px'}}>
            <div style={{fontWeight:'bold'}}>LOGOBAKERY</div>
            <div style={{display:'flex',gap:'25px'}}>
                <a href="#" style={{color:'white',textDecoration:'none'}}>Services</a>
                <a href="#" style={{color:'white',textDecoration:'none'}}>Projects</a>
                <a href="#" style={{color:'white',textDecoration:'none'}}>About</a>
            </div>
            <div>
                <button style={{borderRadius:'20px',backgroundColor:'#0088a7',color:'white',padding:'5px 15px'}}>Contact</button>
            </div>
        </div>
    );
};
export default Navbar;