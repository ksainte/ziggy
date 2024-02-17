import Our_Services_Design from "./Our_Services_Design";
import Navbar from "./Navbar_design";


export default function Design() {
    return (
        <main style={{width:'100vw'}}>
             <Navbar/>
             <div className='App_body'>
             <Our_Services_Design/>
             </div>

        </main>
    )
}