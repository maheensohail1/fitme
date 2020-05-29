import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function InsideTodo(){


        return(
            <div>
               <Link to={'/addtosession'}><button>Add to session</button></Link>
            </div>
        )

}
export default InsideTodo