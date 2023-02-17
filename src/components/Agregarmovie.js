
import axios from 'axios'
import React, { useState } from 'react'
import uniquid from 'uniqid'

function Agregarmovie() {

    //hosk

    const [mov_title, setMov_title] = useState('')
    const [mov_year, setMov_year] = useState('')
    const [mov_time, setMov_time] = useState('')
    const [mov_lang, setMov_lang] = useState('')
    const [mov_date, setMov_date] = useState('')
    const [mov_rel, setMov_rel] = useState('')


    function agregarMovie() {
     var movie = {
        mov_title: mov_title,
        mov_year: mov_year,
        mov_time: mov_time,
        mov_lang: mov_lang,
        mov_date: mov_date,
        mov_rel: mov_rel,
        idusuario: uniquid(),
    

     }
     axios.post("http://localhost:3030/movies/Agregarmovie", movie)
     .then(res=>{
        alert(res.data)
     })
.then(err =>{console.log(err)})
      console.log(movie) 
    }




    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='mt-4'> Agregar nuevo movie</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='mov_title'>movie title</label>
                        <input type='text' className='form-control' value={mov_title} onChange={(e) => { setMov_title(e.target.value) }}></input>
                        <div />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mov_year'>movie year</label>
                        <input type='text' className='form-control' value={mov_year} onChange={(e) => { setMov_year(e.target.value) }}></input>
                        <div />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mov_time'>movie time</label>
                        <input type='text' className='form-control' value={mov_time} onChange={(e) => { setMov_time(e.target.value) }}></input>
                        <div />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mov_lang'>movie lang</label>
                        <input type='text' className='form-control' value={mov_lang} onChange={(e) => { setMov_lang(e.target.value) }}></input>
                        <div />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mov_date'>fecha</label>
                        <input type='text' className='form-control' value={mov_date} onChange={(e)=>{setMov_date(e.target.value)}}></input>
                        <div />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mov_rel'>rel</label>
                        <input type='text' className='form-control' value={mov_rel} onChange={(e)=>{setMov_rel(e.target.value)}}></input>
                        <div />

                        <button onClick={agregarMovie} className='btn btn-success'>Guardar movie</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Agregarmovie

