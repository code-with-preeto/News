import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
function News({ Data }) {
    console.log(Data);

    
    return (
        <>
            
                <div className='container text-center'>
                    <div className='row'>
                      {
                        Data &&
                        Data.map((a) => {
                            if(!a.urlToImage){
                                return null
                            }else{
                                return (
                                    <>
                                        <div className='col'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={a.urlToImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title" onClick={()=>window.open(a.url)}>{a.title}</h5>
                                                <p className="card-text">
                                                    {a.description}
                                                </p>
                                                <button className='btn btn-info' onClick={()=>window.open(a.url)}>Read More</button>
                                                
                                            </div>
                                        </div>
                                        </div>
                                    </>
            
                                )
                            }
                        })
                      }  
                    </div>
                </div>
            
        </>
    )
}
export default News;
