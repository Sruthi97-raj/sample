import React from 'react'
import { personnelData } from './data'

function ArrayData() {
   
    return (
        <div>
            <h1>Welcome</h1>

            {personnelData.map((item,key) =>{
            //   var newDate=new Date(personnelData.sender.created_at)
            //   let s=newDate.toLocalDateString();
            //   console.log(s)
            // var splitdata=personnelData.sender.created_at.split('')
                return(
               
                    <div key={key}>
                    
                     <table>
                         <tbody>
                       
                        <tr>
                            <th>Created _at</th>
                            </tr>
                          <tr>  <td> {item.sender.created_at.split('',10)}</td>
                            {/* <td>{item.splitdata}</td> */}
                
                        </tr>
                         </tbody>
                        
                     </table>
                               
                        </div>
                )
            })}
           </div>
    )
}

export default ArrayData
