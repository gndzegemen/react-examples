import logo from './logo.svg';
import {useEffect} from "react";
import './/style.css'


function App() {

    useEffect(()=> {
        if(process.env.NODE_ENV === "production"){
            //do something
        }
    },[])
    return (
        <div className="App">
            <h3>{process.env.NODE_ENV}</h3>
            <p>{process.env.REACT_APP_API_URL}</p>
            {process.env.NODE_ENV === 'production' && (
                <>
                    <img src="/logo192.png" alt=""/>
                    <img src={logo} alt=""/>

                </>
            )}

        </div>
    );
}

export default App;
