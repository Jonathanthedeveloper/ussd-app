/* eslint-disable react/prop-types */

import Header from "../components/Header.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import UssdList from "../components/UssdList.jsx";



function Code({activeTab, setActiveTab}) {

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
           .catch(error => {
               alert(error.message)
           })



    }, [network])



    return (
        <>
            <Header icon={true} title={`${network} Codes`} setActiveTab={setActiveTab} activeTab={activeTab}/>

            <div className="p-5">
                    {data && <UssdList data={data} />}
            </div>

        </>
    )
}

export default Code
