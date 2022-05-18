import React, { useState } from "react";
import DataProcess2 from "../DataProcess2";
const Form = () => {
    const [data, setData] = useState([
        {
            id: '01', name: 'A Process', isCheck: false,
            subChild: [
                {
                    id: '01-01', name: 'a1',
                    subChild: [
                        { id: '01-01-01', name1: 'a1.1' },
                        { id: '01-01-02', Oname1: 'a1.2' },
                    ]
                },
                {
                    id: '01-02', name: 'a2',
                    subChild: [
                        { id: '01-02-01', name2: 'a2.1' },
                        { id: '01-02-02', Oname2: 'a2.2' },
                    ]
                }

            ]
        },
        {
            id: '02', name: 'B Process',
            subChild: [
                {
                    id: '02-01', name: 'b1',
                    subChild: [
                        { id: '02-01-01', name1: 'b1.1' },
                        { id: '02-01-02', Oname1: 'b1.2' },
                    ]
                },
                {
                    id: '02-02', name: 'b2',
                    subChild: [
                        { id: '02-02-01', name2: 'b2.1' },
                        { id: '02-02-02', Oname2: 'b2.2' },
                    ]
                }

            ]
        },
        {
            id: '03', name: 'C Process',
            subChild: [
                {
                    id: '03-01', name: 'c1',
                    subChild: [
                        { id: '03-01-01', name1: 'c1.1' },
                        { id: '03-01-02', Oname1: 'c1.2' },
                    ]
                },
                {
                    id: '03-02', name: 'c2',
                    subChild: [
                        { id: '03-02-01', name2: 'c2.1' },
                        { id: '03-02-02', Oname2: 'c2.2' },
                    ]
                }

            ]
        }
    ])
    return (
        <div>
            <DataProcess2 data={data} />
        </div>
    )

}

export default Form