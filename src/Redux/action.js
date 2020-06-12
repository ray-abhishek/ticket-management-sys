

const FETCH_REQUEST_SENT = "FETCH_REQUEST_SENT"
const FETCH_COMPANIES_RECEIVED = "FETCH_COMPANIES_RECEIVED"
const FETCH_TICKETS_RECEIVED = "FETCH_TICKETS_RECEIVED"
const FETCH_COMPANY_FAILURE = "FETCH_COMPANY_FAILURE"
const FETCH_TICKET_FAILURE = "FETCH_TICKET_FAILURE"


const registerRequest = () => ({
    type : FETCH_REQUEST_SENT
})

const updateCompanies = (payload) => {
    console.log("updateCompanies called")
    return {
    type : FETCH_COMPANIES_RECEIVED,
    payload : payload
    }
}

const updateTickets = (payload) => {
    console.log("updateTickets called")
    return {
    type : FETCH_TICKETS_RECEIVED,
    payload : payload
    }
}

const fetchCompanyFailure = (error) => {
    console.log("company fetch failure action called")
    return {
        type : FETCH_COMPANY_FAILURE,
        payload : error 
    }
}

const fetchTicketFailure = (error) => {
    console.log("ticket fetch failure action called")
    return {
        type : FETCH_TICKET_FAILURE,
        payload : error 
    }
}

const fetchCompanies = () => {

    console.log("fetchCompanies called ")
    return dispatch => {
        dispatch(registerRequest())
        return axios.get("url to fetch companies").then(res => {
            console.log("fetch companies success",res.data)
            return dispatch(updateCompanies(res.data))
        })
        .catch(err => dispatch(fetchCompanyFailure(err)))
    }
}

const fetchTickets = () => {

    console.log("fetchTickets called ")
    return dispatch => {
        dispatch(registerRequest())
        return axios.get("url to fetch tickets").then(res => {
            console.log("fetch tickets success",res.data)
            return dispatch(updateTickets(res.data))
        })
        .catch(err => dispatch(fetchTicketFailure(err)))
    }
}


export {
    FETCH_REQUEST_SENT,
    FETCH_COMPANIES_RECEIVED,
    FETCH_TICKETS_RECEIVED,
    FETCH_COMPANY_FAILURE,
    FETCH_TICKET_FAILURE,
    fetchCompanies,
    fetchTickets
}
