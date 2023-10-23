import React from 'react';

const Td=({item}) => {
    return(
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.Ip}</td> 
            <td className='px-4 py-3'>{item.ID}</td>    
            <td className='px-4 py-3'>{item.Text}</td>  
            <td className='px-4 py-3'>{item.createdAt}</td>   
        </tr> 
        </>
    )
};

export default Td;