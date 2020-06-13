import React, { useEffect } from 'react'
import { fetchCompanies } from '../../Redux/action'
import { useSelector , useDispatch } from 'react-redux'
import CompanyCard from '../Small/CompanyCard'
import AddCompany from '../Small/AddCompany'

export default function Home(){
    const dispatcher = useDispatch()
    useEffect(()=>{
        console.log("Fetching Companies through useEffect")
        dispatcher(fetchCompanies())
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
            <AddCompany />
            </div>
        </div>
    )
    
}

const flexStyle = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'flex-start',
    flexWrap : 'wrap',
    margin : '0 auto',
    minHeight : '85vh',
    backgroundColor : 'white'
}