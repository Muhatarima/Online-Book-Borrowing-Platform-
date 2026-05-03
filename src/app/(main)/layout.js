import Footer from "../Components/Footer"
import Navbar from "../Components/Navber"
import Providers from "../providers"



const layout = ({ children }) => {
  return (
    <div>
        <Providers>
          <Navbar />
          {children}  
          <Footer></Footer>
        </Providers>    
   
       
    </div>
  )
}

export default layout