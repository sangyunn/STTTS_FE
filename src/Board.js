import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from './Tr';

const Board = () => {
    const [info,setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);

    const nextId = useRef(11);

    useEffect(() => {
        axios.get('http://localhost:5000/api/get')
            .then(res=>setInfo(res.data))
            .catch(err => console.log(err));
    },[]);

    return (
        <div className="container max-w-screen-lg mx-auto">
            <div className='text-xl font-bold mt-5 mb-3 text-center'>Chatting Log</div>
            <table className="min-w-full table-auto text-gray-800">
                <thead className='justify-between'>
                    <tr className='bg-gray-800'>
                        <th className="text-gray-300 px-4 py-3">Ip</th>
                        <th className="text-gray-300 px-4 py-3">Language</th>
                        <th className="text-gray-300 px-4 py-3">Text</th>
                        <th className="text-gray-300 px-4 py-3">Time</th>
                    </tr>
                </thead>
                <Tr info={info}/>
            </table>
        </div>    
    );

};

export default Board;