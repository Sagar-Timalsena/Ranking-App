import React, { useState, useEffect } from React;

const RankItem = () => {

    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('item/${dataType}')
            .then((results) => {
                return returns.json();
            })
            .then(data => {
                setItem(data);
            })
    },[])


    return (
        <main>
            (item.length>0)? items.map(item)=> <h3>
                {items.title}            </h3>:<div>Loading......</div>
        </main>
        )
}
export default RankItem