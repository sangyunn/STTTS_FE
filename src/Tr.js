import React from 'react';
import Td from './Td';

const Tr=({info}) => {
    return (
        <tbody>
            {
                info.slice(-10).map(item => {
                    return(
                        <Td key={item._id} item={item}/>
                    )
                })
            }

        </tbody>
    );
};

export default Tr;