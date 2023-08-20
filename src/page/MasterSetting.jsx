import React from 'react'
import Card from '../components/MasterSetting/Card'

const MasterSetting = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <div className="container my-5">
            <div className="row" >

                {myArray.map(e => <Card key={e} />)
                }
            </div>

        </div>
    )
}

export default MasterSetting