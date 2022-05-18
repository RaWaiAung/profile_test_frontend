import React, { useState } from 'react'
import DataProcess3 from './DataProcess3';
import Axios from 'axios';
const DataProcess2 = ({ data }) => {
    const [isEditing, setEditing] = useState(false)
    const [isSetA, setIsSetA] = useState([]);
    const [isSetB, setIsSetB] = useState([]);
    const [isSetC, setIsSetC] = useState([]);
    //For A process
    const [isSet2, setIsSet2] = useState([]);
    const [isSet3, setIsSet3] = useState([]);
    //For B process
    const [isSet4, setIsSet4] = useState([]);
    const [isSet5, setIsSet5] = useState([]);
    //For C process
    const [isSet6, setIsSet6] = useState([]);
    const [isSet7, setIsSet7] = useState([]);
  

    const handleSave = () => {
        //For A process
        const set = { ...isSetA, ...isSet2 };
        const set2 = { ...isSetA, ...isSet3 }
         //For B process
         const set3 = { ...isSetB, ...isSet4 };
         const set4 = { ...isSetB, ...isSet5 }
         
         //For C process
         const set5 = { ...isSetC, ...isSet6 };
         const set6 = { ...isSetC, ...isSet7 }
         
        
           if(set || set2 || set3 || set4 || set5 || set6){
            const { processTitle, subName, subVersion} = set;
          Axios.post('http://localhost:5000/api/v1/task',{
                processTitle,
                subName,
                subVersion
            }).then((response)=>{console.log(response.config.data)})
           }
          if(set || set2 || set3 || set4 || set5 || set6){
            const { processTitle, subName, subVersion} = set2;
             Axios.post('http://localhost:5000/api/v1/task',{
                processTitle,
                subName,
                subVersion
            }).then((response)=>{console.log(response.config.data)})
           }
           if(set || set2 || set3 || set4 || set5 || set6){
            const { processTitle, subName, subVersion} = set3;
            Axios.post('http://localhost:5000/api/v1/task',{
                processTitle,
                subName,
                subVersion
            }).then((response)=>{console.log(response.config.data)})
           }
          
           if(set || set2 || set3 || set4 || set5 || set6){
            const { processTitle, subName, subVersion} = set4;
              Axios.post('http://localhost:5000/api/v1/task',{
                processTitle,
                subName,
                subVersion
            }).then((response)=>{console.log(response.config.data)})
           }
          
           if(set || set2 || set3 || set4 || set5 || set6){
            const { processTitle, subName, subVersion} = set5;
              Axios.post('http://localhost:5000/api/v1/task',{
                processTitle,
                subName,
                subVersion
            }).then((response)=>{console.log(response.config.data)})
           }
           if(set || set2 || set3 || set4 || set5 || set6){
            const { processTitle, subName, subVersion} = set6;
             Axios.post('http://localhost:5000/api/v1/task',{
                processTitle,
                subName,
                subVersion
            }).then((response)=>{console.log(response.config.data)})
           }
          window.location = "/process"
    }

    return (
        <div className="global-section" >
            {
                data.map(item => {
                    const { id, name, subChild } = item;
                    return (
                        <div key={id} className="whole-section">
                            <DataProcess3
                                name={name}
                                subChild={subChild}
                                setIsSetA={setIsSetA}
                                setIsSetB={setIsSetB}
                                setIsSetC={setIsSetC}
                                setIsSet2={setIsSet2}
                                setIsSet3={setIsSet3}
                                setIsSet4={setIsSet4}
                                setIsSet5={setIsSet5}
                                setIsSet6={setIsSet6}
                                setIsSet7={setIsSet7}
                            />
                        </div>
                    )
                })

            }
            <div>
                <button type="button" onClick={handleSave} className="btn btn-primary">Save</button>
            </div>
        </div>)
}

export default DataProcess2;