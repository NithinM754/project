import React from "react"
import './nav.css';
import Cart from "./cart";

import { Link } from "react-router-dom";

function Navbar()
{
    return(
    <>
    
            <div className="landing">
                <header>
                    <Link style={{fontSize:'1.7em'}} className='logo'><i style={{fontSize:'1em'}} class="fa-solid fa-utensils"></i> Crispy Huts- Have it your way</Link>
                    <nav>
                        <Link className='logo'><i class="fa-solid fa-bars"></i> Menu</Link>
                        <Link  className='logo'>About Us</Link> 
                    <Link  className='logo'><i class="fa-solid fa-location-dot"></i> Locations</Link>
                    <Link className='logo' to="/cart" element={<Cart/>}><i class="fa-solid fa-cart-shopping"></i>Cart</Link>
                   
            </nav>
            </header>
          </div>
          </>
    )
            }
 

export default Navbar;