import React, { useEffect } from 'react'
import { fetchCompanies } from '../../Redux/action'
import { useSelector } from 'react-redux'

import CompanyCard from '../Small/CompanyCard'

export default function Home(){

    useEffect(()=>{
        console.log("Fetching Companies through useEffect")
        fetchCompanies()
    }, [])

    const companies = useSelector(state => state.companies )

    return (
        <div>
            <div  style={flexStyle}>
            {
                companies.length > 0 ? companies.map(item => {
                    return <CompanyCard company={item}/> 
                }): <div>Unable to load Companies</div>
            }
            </div>
        </div>
    )
    
}

const flexStyle = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    flexWrap : 'wrap',
    margin : '0 auto'
}