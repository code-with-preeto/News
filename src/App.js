import {useState} from 'react';
function App(){
  const [data,updateData] = useState([]);
  const [value,updateValue]= useState('');
  const [index,setIndex] =useState(null);

  function getvalue(e){
          updateValue(e.target.value);  
  }

  function addValue(){
    let newData = [...data,value];
    updateData(newData);
    updateValue('');
  }
  function deleteValues(index){
      let dummyArray = [...data];
      dummyArray.splice(index,1);
      updateData(dummyArray);
  }
  function UpdateElement(ind){
    updateValue(data[ind]);
    setIndex(ind);

  }
  function saveChanges(){
    let myDummyArray = [...data];
    myDummyArray[index]=value;
    updateData(myDummyArray);
    setIndex(null);
    updateValue('');
  }
  return(
    <>
    <input placeholder='enter your plan' onChange={getvalue} value={value}/>
    <button onClick = {addValue}>Add data</button>
    <button onClick={saveChanges}>Submit</button>
    {
      data.map((a,i)=>{
        return(
          <>
            <p>{a}</p>
             <button onClick={()=>{deleteValues(i)}}>Delete</button>
             <button onClick={()=>{UpdateElement(i)}}>Update</button>
          </>
        )
      })
    }
    
    </>
  )
}
export default App;
