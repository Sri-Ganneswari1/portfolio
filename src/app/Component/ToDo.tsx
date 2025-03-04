// "use client";
// import React, { useState } from "react"
// const Counter = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <p>You Clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// };
// export default Counter

// "use client"
// import { useState } from "react"
// export const BasicButtonClick = () => {
//     const [text, setText] = useState("This is my para graph")
//     const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const [stateList, setList] = useState(list)
//     const handleClick = () => {
//         setText("updated new paragraph text")
//     }
//     const handleElementClick = (e,index) => {
//         list[index] = list[index] + 1
//         setList([...list])
//     }
//     return <div>
//         <p>{text}</p>
//         <button onClick={handleClick}> This is my button</button>
//         {stateList.map((ele, index) => <p onClick={(e) => handleElementClick(e, index)}>{ele}</p>)}
//     </div>
// }

// "use client"
// import { useState } from "react"
// const ToDoApplication = () => {
//     const [name, setName] = useState("")
//     const [listName, setListName] = useState([])
//     const handleCallback = (event:any) => {
//         console.log(event,"event")
//         setName(event.target.value)
//     }
//     const handleButtonOnclick = () => {
//         console.log("onClick")
//         setListName([...listName, name])
//         setName("");
//     }
//     return <div>
//         <input type="text" placeholder="Enter list name" value={name} onChange={handleCallback}/>
//         <button type="button" onClick={handleButtonOnclick}>addtodo</button>
//         <p>{`${name}`}</p>
//         {listName.map((ele,index)=>{
//             return <div key={index}>{ele}</div>
//         })}
//     </div>
// }
// export default ToDoApplication


const Sample=()=>{
    return <div></div>
}
export default Sample
