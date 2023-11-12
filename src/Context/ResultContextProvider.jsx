// import React, { createContext, useContext, useState } from "react";

// const ResultContext = createContext();
// const baseUrl = "https://google-api31.p.rapidapi.com/websearch";

// export const ResultContextProvider = ({ children }) => {
//     const [results, setResults] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");
    
//     const getResults = async (type) => {
//         setIsLoading(true);
//         const response = await fetch(`${baseUrl}${type}`, {
//             method: 'GET',
//             headers:{
//                 'content-type': 'application/json',
//                 'X-RapidAPI-Key': '277f6cf712msha3aac7393ce9894p1a881ejsn842902308966',
//                 'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
//             }
//         })
//         const data = await response.json();
//         console.log(data);
//         setResults(data);
//         setIsLoading(false);
//     }

//     return (
//         <ResultContext.Provider value={{ getResults, results , searchTerm, setSearchTerm, isLoading }}>
//             {children}
//         </ResultContext.Provider>
//     )
// };

// export const useResultContext = useContext(ResultContext)
