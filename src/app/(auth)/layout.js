import Navbar from "../Components/Navber";

const layout = ({ children }) => {

  return (
    <div>
        <Navbar />
        {children}
       
    </div>
  )
}

export default layout