import React, { useEffect, useState } from "react";
import News from './News';
const Modern=()=>{
    const [search,setSearch] = useState("india")
    const [data,updateData]= useState(null)
     const API_KEY = "f5e238c95243443b9cf4c07f2402cac9"
    const getData = async()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        // console.log(jsonData.articles);
        updateData(jsonData.articles);
    }
    useEffect(()=>{
        getData()
    },[])

    const handleInput=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInput=(e)=>{
        setSearch(e.target.value);
    }
    return(
        <>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>

            </ul>
            <div className="searchBar">
                <input type="text" placeholder="Search News" value={search} onChange={handleInput}/>
                <button onClick={()=>{getData()}}>Search</button>
            </div>
        </nav>
        <div>
            <p className="head">Stay Update with TrendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics"> Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>

        </div>
        <div>
            <News Data={data}/>
        </div>

        </>
    )
}
export default Modern;

