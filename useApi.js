import { useState , useEffect } from "react";

export default function useApi(url){
    let [state , setState] = useState([null , true])
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setState([ data, false]))
    } , [])
    return state
}