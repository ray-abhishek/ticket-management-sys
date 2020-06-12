import {
    FETCH_REQUEST_SENT,
    FETCH_COMPANIES_RECEIVED,
    FETCH_TICKETS_RECEIVED,
    FETCH_COMPANY_FAILURE,
    FETCH_TICKET_FAILURE
} from './action'

const initialState = {
    isLoading : false,
    tickets : [],
    companies : []
}

export default function reducer( state = initialState , { type , payload }){

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
                companies : payload.data,
                isLoading : false, 
            }
        case FETCH_TICKETS_RECEIVED:
            console.log("FETCH_TICKETS_RECEIVED")
            return {
                ...state,
                tickets : payload.data,
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
        default : console.log("DEFAULT called")
                  return state 
    }
}