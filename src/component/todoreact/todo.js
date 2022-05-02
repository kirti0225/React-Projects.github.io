import React, {useState, useEffect} from 'react';
import './style.css'

const getLocalData=()=>{
    const lists=localStorage.getItem("mytodolist");
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
}
}
export default function Todo() {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
const [isEditItem,setIsEditItem]=useState("");
const [toggleButton,setToggleButton]=useState(false);
    const addItem = () => {
        if (!inputData){
            alert("plz fill the data");
        }else if(inputData&& toggleButton){
            setItems(
                items.map((curElem)=>{
                if(curElem.id===isEditItem){
                    return{...curElem,name:inputData}
                }
                return curElem;
                }));
                setInputData("");
                setIsEditItem(null);
                setToggleButton(false);
        }
         else {
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:inputData
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };
    const editItem=(index)=>{
        const item_todo_edited= items.find((curElem)=>{
            return curElem.id===index;
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index);
        setToggleButton(true)
    }
    const deleteItem=(index)=>{
        const updateitem=items.filter((curElem)=>{
            return curElem.id !== index;
        })
        setItems(updateitem)
    }
    const removeAll=()=>{
        setItems([])
    }
    useEffect(()=>{
        localStorage.setItem('mytodolist',JSON.stringify(items));
    },[items])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List here👍</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='Add Item' className='form-control' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                        {toggleButton ?(<i class="far add-btn fa-edit" onClick={addItem}></i>
                        ):(<i class="fa add-btn fa-plus" onClick={addItem}></i>)}
                        
                    </div>
                    {/* show items */}

                    <div className="showItem">
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem" key={index}>
                                    <h3>{curElem.name}</h3>
                                    <div className="todo-btn">
                                        <i class="far add-btn fa-edit" onClick={()=>editItem(curElem.id)}></i>
                                        <i class="far add-btn fa-trash-alt"onClick={()=>deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* remove button */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
