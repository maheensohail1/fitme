import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import Axios from 'axios';
//import {Icon} from 'antd';

function FileUpload(props) {

    const [Images, setImages] = useState([])

    const onDrop =(files)=>{
        let formData = new FormData();
        const config = {

            header :{'content-type':'multipart/form-data'} 
    }
    formData.append("file", files[0])
    Axios.post('http://localhost:4000/todos/addImage',formData, config)
        .then(response => {
            if(response.data.success){
                setImages([...Images, response.data.image])
                props.refreshFunction([...Images, response.data.image])
            
            }else{
                alert('failed to save image in server')
            }
        })

    }

    const onDelete =(image) => {
        const currentIndex= Images.indexOf(image);
        let newImages= [...Images]
        newImages.splice(currentIndex,1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return(
        <div style={{ display:'flex', justifyContent: 'center' }}>
            <Dropzone
                onDrop={onDrop}
                multiple= {false}
                maxSize={80000000000}
            
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{ width:'330px', height:'240px', border:'1px solid lightgray', display:'flex', alignItems:'center', justifyContent:'center'}}
                        {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <h4>click to add</h4>


                    </div>
                )}
                </Dropzone>

                <div style={{ display:'flex', width:'350px', height:'240px', overflow:'scroll'}}>

                    {Images.map((image,index) =>(
                         <div onClick={() => onDelete(image)}>
                         <img style={{minWidth:'300px', width:'300px', height:'240px'}} src={`http://localhost:4000/${image}`} alt={`productImg-${index}`}/>
                    </div>
                    ))}

                   

                </div>

        </div>
    )
        

    
}
export default FileUpload