import React,{useState} from 'react'
import todo from  '../images/todo.png';



const Todo = () => {

    const [inputData,setInputData]=useState("");
    const [items,setItems]=useState([]);
    const [toggleSubmit,setToggleSubmit]=useState(true);
    const [isEditItem,setIsEditItem]=useState(null);

    const addItem=()=>{
        if(!inputData){

        }else if(inputData && !toggleSubmit){
            setItems(
                items.map((value)=>{
                    if(value.id===isEditItem){
                        return {...value,name:inputData}
                    } 
                    return value
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null)
        }       
        else{
            const allInputData={id:new Date().getTime().toString(),name:inputData}
        setItems([...items,allInputData]);
        setInputData("")
    }
    } 

    //Delete the item
    const deleteItem=(index)=>{
        const updatedData=items.filter((value)=>{
            return index!==value.id;
        })
        setItems(updatedData);
    }
    const removeAll=()=>{
        setItems([]);
    }

    //Edit Item
    const editItem=(id)=>{
        let newEditItem=items.find((v)=>{
            return v.id ===id
        })
        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id)

    }
    

    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todologo" />
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="Add items" onChange={(e)=>{
                        setInputData(e.target.value)
                    }} value={inputData} />
                    {
                        toggleSubmit ? 
                        <i className="fa fa-plus add-btn" onClick={addItem} title="Add Item"></i>: <i className="far fa-edit add-btn" onClick={addItem} title="Edit Item"></i>
               
             
                    }
                    </div>

                <div className="showItems">
                    {items.map((value)=>{
                        return(
                            <div className="eachItem" key={value.id}>
                            <h3>{value.name}</h3>
                            <div className="todo-btn">
                            <i className="far fa-edit add-btn" title="Edit Item" onClick={()=>editItem(value.id)}></i>
                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(value.id)}></i>
                            </div>
                        </div>
                        )
                    })}
                  
                </div>

                <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All " onClick={removeAll}><span>CHECK LIST</span></button>
                </div>

            </div>
        </div>
            
        </>
    )
}

export default Todo
