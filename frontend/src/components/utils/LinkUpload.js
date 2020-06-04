import React, {useState} from 'react';
import Axios from 'axios';

function LinkUpload(props){

    const [inputList, setInputList] = useState([ {link: ""}])

    const handleInputChange = (e, index) => {
       
        const { name, value } = e.target;
        let formData = new FormData();
        const config = {
            header :{'content-type':'multipart/form-data'} 
         }
    formData.append("link", value)
    Axios.post('http://localhost:4000/todos/addLink',formData, config)
        .then(response => {
            if(response.data.success){
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        props.refreshFunction(list);
            }else{
                alert('failed to save image in server')
            }
      })};
     
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        props.refreshFunction(list);
      };
     
      // handle click event of the Add button
      const handleAddClick = () => {
        setInputList([...inputList, { link: ""}]);
        props.refreshFunction([...inputList, { link: ""}]);
      };
    
    return(
        <div>
        {inputList.map((x,i) =>{
            return(
                <div className="box">
                    <input
                        name="link"
                        value={x.link}
                        onChange={e => handleInputChange(e, i)}
                    />
                    <div className="btn-box">
              {inputList.length !== 1 && <button
               className="mr10"
               onClick={() => handleRemoveClick(i)}>
                Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
                </div>
            )
        })}
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        
        </div>

    )

}

export default LinkUpload
