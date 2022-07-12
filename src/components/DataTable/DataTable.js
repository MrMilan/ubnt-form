import React, { useState, useEffect } from "react"
import api from "../../utils/api"

import './DataTable.css';


const DataTable = () => {
    
    const [dbData, setDbData] = useState([])

    useEffect(() => {
        const getDataFromDb = async () => {
            const result = await api.get('data') 
            console.log(result)
            setDbData(result)
        }
        getDataFromDb()
        const interval = setInterval(() => getDataFromDb(), 10000)
        return () => {
          clearInterval(interval);
        }
    }, [])

    return (
        <div className="result-table">
            <table>
                <thead><tr><th>Name</th><th>Height</th></tr></thead>
                <tbody>
                    {
                        dbData.length && dbData.map(({name, height}) => (
                            <tr>
                                <td>{name}</td>
                                <td>{height}</td>
                            </tr>
                        )) || (
                            <tr>
                                <td>No data</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
