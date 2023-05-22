import Header from "../components/Header.jsx";

import {useParams} from "react-router";
import {useEffect, useState} from "react";
import UssdList from "../components/UssdList.jsx";


function App() {

    const {network} = useParams();
    const [data, setData] = useState(null);


    useEffect(function () {
       fetch("./data.json")
           .then(res => {
               return res.json();
           })
           .then(data=> {

               for(const key in data) {
                   if(key === network) {
                       setData(data[key]);
                       return
                   }
               }

           })



    }, [network])



    return (
        <>
            <Header icon={true} title={`${network} Codes`}/>
            <div className="p-5">
                <ul className="grid gap-5">
                    {data && <UssdList data={data}/>}
                </ul>
            </div>

        </>
    )
}

export default App
