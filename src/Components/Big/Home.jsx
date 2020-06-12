import React, { useEffect } from 'react'
import fetchCompanies from '../../Redux/action'
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
            {
                companies.map(item => {
                    return <CompanyCard company={item}/>
                })
            }
        </div>
    )
    
}