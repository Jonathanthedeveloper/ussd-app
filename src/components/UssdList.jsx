import List from "./List.jsx";
function UssdList ({data}) {
    return (
        data.map((datum, index) => {
            return (
                <List key={index} data={datum}/>
            )
        })
    )
}

export default UssdList