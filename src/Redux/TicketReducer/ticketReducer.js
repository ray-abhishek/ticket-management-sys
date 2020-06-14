import {
    FETCH_REQUEST_SENT,
    FETCH_COMPANIES_RECEIVED,
    FETCH_TICKETS_RECEIVED,
    FETCH_COMPANY_FAILURE,
    FETCH_TICKET_FAILURE,
    UPDATE_STATUS,
    FETCH_STATUS_FAILURE,
    UPDATE_COUNT,
    FETCH_COUNT_FAILURE,
} from './action'
import sampleCompanies from './sampleCompanies.json'
import sampleTickets from './sampleTickets.json'

console.log(sampleCompanies," are loaded for demo purpose")
console.log(sampleTickets," are loaded for demo purpose")


const initialState = {
    isLoading : false,
    tickets : [],
    companies : [],
    status : [],
    count : []
}

export default function ticketReducer( state = initialState , { type , payload }){

    console.log(type," is action type while payload is ",payload," while initial State is ",initialState)

    switch(type){
        case FETCH_REQUEST_SENT: 
            console.log("FETCH_REQUEST_SENT called")
            return {
                ...state,
                isLoading : true,
            }
        case FETCH_COMPANIES_RECEIVED:
            console.log("FETCH COMPANIES_RECEIVED called")
            return {
                ...state,
                companies : payload.companyData,
                isLoading : false, 
            }
        case FETCH_TICKETS_RECEIVED:
            console.log("FETCH_TICKETS_RECEIVED")
            return {
                ...state,
                tickets : payload.ticketData,
                isLoading : false
            }
        case FETCH_COMPANY_FAILURE:
            console.log("FETCH_COMPANY_FAILURE called")
            return {
                ...state,
                error : payload
            }
        case FETCH_TICKET_FAILURE:
                console.log("FETCH_TICKET_FAILURE called")
                return {
                    ...state,
                    error : payload
                }
        case UPDATE_STATUS:
                console.log("UPDATE_STATUS called")
                return {
                    ...state,
                    status : payload.status
                }
        case FETCH_STATUS_FAILURE:
                console.log("FETCH_STATUS_FAILURE called")
                return {
                    ...state,
                    error : payload 
                }
        case UPDATE_COUNT:
                console.log("UPDATE_COUNT called ")
                return {
                    ...state,
                    count : payload.count
                }
        case FETCH_COUNT_FAILURE:
                console.log("FETCH_COUNT_FAILURE called ")
                return {
                    ...state,
                    error : payload 
                }
        default : console.log("DEFAULT called")
                  return state 
    }
}