import { createContext, useState } from "react";
import latestNewsList from '../components/LatestNewsList'


export const LatestSliderContext= createContext([
    {
        title: '',
        imgLink: '',

    }
])



export const LatestSliderProvider= ({children})=>{
 
    const [latestNewsData, setLatestNewsData]= useState(latestNewsList )

    return <LatestSliderContext.Provider value={{latestNewsData, setLatestNewsData}} >
            {children}
    </LatestSliderContext.Provider>
}