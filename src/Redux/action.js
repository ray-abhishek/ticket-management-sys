import axios from 'axios'

const FETCH_REQUEST_SENT = "FETCH_REQUEST_SENT"
const FETCH_COMPANIES_RECEIVED = "FETCH_COMPANIES_RECEIVED"
const FETCH_TICKETS_RECEIVED = "FETCH_TICKETS_RECEIVED"
const FETCH_COMPANY_FAILURE = "FETCH_COMPANY_FAILURE"
const FETCH_TICKET_FAILURE = "FETCH_TICKET_FAILURE"
//const ADD_TICKET = "ADD_TICKET"
//const ADD_COMPANY = "ADD_COMPANY"
const UPDATE_STATUS = "UPDATE_STATUS"
const FETCH_STATUS_FAILURE = "FETCH_STATUS_FAILURE" 

const registerRequest = () => ({
    type : FETCH_REQUEST_SENT
})

const updateStatus = (payload) => {
    console.log("updateStatus called")
    return {
        type : UPDATE_STATUS,
        payload : payload 
    }
}

const fetchStatusFailure = (error) => {
    console.log("status fetch failure action called")
    return {
        type : FETCH_STATUS_FAILURE,
        payload : error 
    }
}

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
/*
const newTicket = (payload) => {
    console.log("addTicket called")
    return {
        type : ADD_TICKET,
        payload : payload
    }
}

const newCompany = (payload) => {
    console.log("addCompany called")
    return {
        type : ADD_COMPANY,
        payload : payload
    }
}
*/
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
        console.log("Registering Request")
        dispatch(registerRequest())
        return axios.get("http://127.0.0.1:5000/fetch/companies").then(res => {
            console.log("fetch companies success",res.data)
            return dispatch(updateCompanies(res.data))
        })
        .catch(err => dispatch(fetchCompanyFailure(err)))
    }
}

const fetchTickets = () => {

    console.log("fetchTickets called ")
    return dispatch => {
        console.log("Registering Request")
        dispatch(registerRequest())
        return axios.get("http://127.0.0.1:5000/fetch/tickets").then(res => {
            console.log("fetch tickets success",res.data)
            return dispatch(updateTickets(res.data))
        })
        .catch(err => dispatch(fetchTicketFailure(err)))
    }
}

const fetchStatus = () => {

    console.log("fetchStatus called ")
    return dispatch => {
        console.log("Registering Request")
        dispatch(registerRequest())
        return axios.get("http://127.0.0.1:5000/fetch/status").then(res => {
            console.log("fetch status success",res.data)
            return dispatch(updateStatus(res.data))
        })
        .catch(err => dispatch(fetchStatusFailure(err)))
    }
}


const addTicket = (payload) => {
    console.log(payload," is ticket/payload to be added to DB")
    console.log("addTicket called ")
    return dispatch => {
        console.log("Registering Request")
        dispatch(registerRequest())
        return axios.post("http://127.0.0.1:5000/add/ticket",payload).then(res => {
            console.log("new tickets success",res.data)
            return dispatch(updateTickets(res.data))
        })
        .catch(err => dispatch(fetchTicketFailure(err)))
    }
}

const modifyTicket = (payload) => {
    console.log(payload," is ticket/payload to be modified in DB")
    console.log("modifyTicket called ")
    return dispatch => {
        console.log("Registering Request")
        dispatch(registerRequest())
        return axios.post("http://127.0.0.1:5000/modify/ticket",payload).then(res => {
            console.log("modify tickets success",res.data)
            return dispatch(updateTickets(res.data))
        })
        .catch(err => dispatch(fetchTicketFailure(err)))
    }
}

const addCompany = (payload) => {
    console.log(payload," is company/payload to be added to DB")
    console.log("addCompany called ")
    return dispatch => {
        console.log("Registering Request")
        dispatch(registerRequest())
        return axios.post("http://127.0.0.1:5000/add/company",payload).then(res => {
            console.log("new company success",res.data)
            return dispatch(updateCompanies(res.data))
        })
        .catch(err => dispatch(fetchCompanyFailure(err)))
    }
}

export {
    FETCH_REQUEST_SENT,
    FETCH_COMPANIES_RECEIVED,
    FETCH_TICKETS_RECEIVED,
    FETCH_COMPANY_FAILURE,
    FETCH_TICKET_FAILURE,
    UPDATE_STATUS,
    FETCH_STATUS_FAILURE,
    fetchCompanies,
    fetchTickets,
    addTicket,
    addCompany,
    modifyTicket,
    fetchStatus
}
