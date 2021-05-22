import React, {useEffect, useState} from 'react'
import './Covid.css'
const Covid = () => {

    const [data, setData]= useState([]);

    const getCovidData = async ()=>{
        try {
      const res = await  fetch('https://api.covid19india.org/data.json');
      const data =await res.json()
      console.log(data.statewise[0])
      setData(data.statewise[0])
    } catch (err) { 
        console.log(err)
    }
}

    useEffect(() => {
        getCovidData();
       }, []);

    return (
        <>
        <section>
        
           <h1 class="slider-text1"> LIVE </h1>
           <h2>COVID-19 TRACKER</h2> 

           <ul>
           <li className="card">
           <div className="card__main">
               <div className="card__inner">
                  <p className="card__name"><span> OUR </span> COUNTRY </p> 
                  <p className="card__total card__small">INDIA</p>
               </div>
           </div>

           </li>

           <li className="card">
           <div className="card__main">
               <div className="card__inner">
                  <p className="card__name"><span>TOTAL </span> RECOVERED </p> 
                  <p className="card__total card__small">{data.deltarecovered}</p>
               </div>
           </div>

           </li>

           <li className="card">
           <div className="card__main">
               <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> CONFIRMED </p> 
                  <p className="card__total card__small">{data.deltaconfirmed}</p>
               </div>
           </div>

           </li>

           <li className="card">
           <div className="card__main">
               <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> DEATHS </p> 
                  <p className="card__total card__small">{data.deaths}</p>
               </div>
           </div>

           </li>

           <li className="card">
           <div className="card__main">
               <div className="card__inner">
                  <p className="card__name"><span> TOTAL </span> ACTIVE </p> 
                  <p className="card__total card__small">{data.active}</p>
               </div>
           </div>

           </li>

           <li className="card">
           <div className="card__main">
               <div className="card__inner">
                  <p className="card__name"><span> LAST </span> UPDATED </p> 
                  <p className="card__total card__small">{data.lastupdatedtime}</p>
               </div>
           </div>

           </li>
           </ul>
        
        </section>
        </>
    )

}

export default Covid
