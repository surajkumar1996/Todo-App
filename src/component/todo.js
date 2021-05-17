import React,{useState} from 'react'
import todo from  '../images/todo.png';



const Todo = () => {

    const [inputData,setInputData]=useState("");
    const [items,setItems]=useState([]);

    const addItem=()=>{
        if(!inputData){

        }else{

        setItems([...items,inputData]);
        setInputData("")
    }
    } 

    //Delete the item
    const deleteItem=(id)=>{
        const updatedData=items.filter((value,index)=>{
            return index!==id;
        })
        setItems(updatedData);
    }
    const removeAll=()=>{
        setItems([]);
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
                    <i className="fa fa-plus add-btn" onClick={addItem} title="Add Item"></i>
                </div>

                <div className="showItems">
                    {items.map((value,index)=>{
                        return(
                            <div className="eachItem" key={index}>
                            <h3>{value}</h3>
                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(index)}></i>
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
