import React, { useState } from 'react'
import DataProcess4 from './DataProcess4';
import DataProcess5 from './DataProcess5';
import DataProcess6 from './DataProcess6';
const DataProcess3 = (
    { name,
        subChild,
        setIsSetA,
        setIsSetB,
        setIsSetC,
        setIsSet3,
        setIsSet2,
        setIsSet4,
        setIsSet5,
        setIsSet6,
        setIsSet7 }
) => {
    const [isCheck, setIsCheck] = useState(false);
    const [processName, setProcessName] = useState('');
    const handleChange = value => {
        if (value === 'A Process') {
            setIsSetA({ processTitle: value });
        }
        if (value === 'B Process') {
            setIsSetB({ processTitle: value })
        }
        if (value === 'C Process') {
            setIsSetC({ processTitle: value })
        }
    }
    return (
        <div className="whole-section">
            <section className="main-section">
                <input
                    type="checkbox"
                    name={name}
                    id="checkbox"
                    checked={isCheck}
                    value={name}
                    onChange={e => {
                        setProcessName(e.target.name);
                        setIsCheck(!isCheck);
                        handleChange(e.target.value);
                    }}
                />
                <span>{name}</span>
            </section>

            {name === 'A Process' && isCheck && subChild.map(child => {
                const { id, name, subChild } = child;
                return (
                    <div key={id}>
                        <DataProcess4 name={name} subChild={subChild} setIsSet3={setIsSet3} setIsSet2={setIsSet2} />
                    </div>
                )
            })}
            {name === 'C Process' && isCheck && subChild.map(child => {
                const { id, name, subChild } = child;
                return (
                    <div key={id}>
                        <DataProcess6 name={name} subChild={subChild} setIsSet6={setIsSet6} setIsSet7={setIsSet7} />
                    </div>
                )
            })}
            {name === 'B Process' && isCheck && subChild.map(child => {
                const { id, name, subChild } = child;
                return (
                    <div key={id}>
                        <DataProcess5 name={name} subChild={subChild} setIsSet4={setIsSet4} setIsSet5={setIsSet5} />
                    </div>
                )
            })}
        </div>
    )
}

export default DataProcess3;