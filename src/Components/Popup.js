import React from 'react'
import "./PopupStyle.css"
import axios, { Axios } from "axios"
export default function Popup(props) {
    function handleClick(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/delete', props.flightnum)
        console.log("fn" + props.flightnum)
        props.setTrigger(false)
        //el heta el zawdnahaa
        axios.get('http://localhost:3001/delete').then(response => {
            console.log(response);
            ///
        }
        ).catch(err => {
            console.log(err);
        })


    }
    return ((props.trigger) ? (<div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>
                cancel
            </button>
            <button onClick={handleClick} className='delete-btn'>delete</button>
            {props.children}
        </div>
    </div>) : ''

    )
}