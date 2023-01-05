import { useEffect, useState } from 'react';

const RankItem = () => {

    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('item/${dataType}')
            .then((results) => {
                return.json();
            })
            .then(data => {
                setItem(data);
            })
    }, [])


    return (
        <main>
            <div className="item-not-ranked">
                {
                    (item.length > 0) ? items.map((item)=>
                <div className="unranked-cell">
                    <img id={'item-${item.id}'} src={MovieImageArr.find(o => o.id === item.imageId)?.image} />

                    </div>
               ) :<div>Loading......</div>
                }
            </div>
         
        </main>
    )
}
export default RankItem;