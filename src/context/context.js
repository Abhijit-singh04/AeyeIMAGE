import React, { useState, useContext } from 'react'
import { Initial_data } from '../componenet/data.js'
// import { useCallback } from 'react'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(Initial_data)

     const [theme, setTheme] = useState('light')

      const toggleTheme = () => {
        // console.log("themee->",theme)
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };

    const Changing = (args) => {
        // const page = sublinks.find((link) => link.page === text);
        console.log('args',args);
        console.log('data type ->',typeof(data));
        setData(args);

        console.log('hie',data);

    };

    const loading_func =()=>{
        setLoading(true);
    };
    const loading_func_opp=()=>{
        setLoading(false);
    };

    return (
        <AppContext.Provider
            value={
                {
                    loading,
                    data,
                    Changing,
                    loading_func,
                    loading_func_opp,
                    theme,
                    toggleTheme,
                }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }