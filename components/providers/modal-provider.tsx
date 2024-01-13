"use client"
import { useEffect, useState } from "react"
import { SettingsModal } from "../models/settings-modal"
export const ModalProvider=()=>{
    const [isMounted,setIsMounted]=useState(true)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    return(
        <>
        <SettingsModal/>
        </>
    )
}