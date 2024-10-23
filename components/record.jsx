import React from 'react'

const Record = ({data,todoDelete,todoComplete}) => {
    
    
      return (

        <div className="overflow-x-auto p-11 flex justify-center">
          <table className=" bg-white border border-gray-300 ">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">title</th>
                <th className="py-2 px-4 border-b">descripton</th>
                <th className="py-2 px-4 border-b">status</th>
                <th className="py-2 px-4 border-b">action</th>
              </tr>
            </thead>
            <tbody>
              {(Array.isArray(data) ? data : []).map((item,index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className={`py-2 px-4 border-b ${item.isComplete? "line-through" : ""}`}>{item.title}</td>
                  <td className={`py-2 px-4 border-b ${item.isComplete? "line-through" : ""}`}>{item.description}</td>
                  <td className="py-2 px-4 border-b">{item.isComplete? "completed" : "pending" }</td>
                 
                  <td className="py-2 px-4 border-b flex flex-row align-middle height-full">
                  {/* { (item.status == "completed") ? <button className='bg-red-500 mr-3 text-sm pt-1 pb-1 pl-2 pr-2'>Delete</button> : } */}
                  <button onClick={()=>todoDelete(item._id)} className='bg-red-500 mr-3 text-sm pt-1 pb-1 pl-2 pr-2'>Delete</button>
                  { item.isComplete? "" : <button onClick={()=>todoComplete(item._id)} className='bg-green-500  text-sm pt-1 pb-1 pl-3 pr-3'>Done</button> }
                 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )    
}

export default Record
