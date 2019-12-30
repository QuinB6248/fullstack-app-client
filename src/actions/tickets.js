import request from 'superagent'
//const baseUrl = 'http://localhost:4000'
const baseUrl ='https://pure-hamlet-15394.herokuapp.com'


///////////////////FETCH TICKETS ACTION///////////////////////////
export const TICKETS_FETCHED = 'TICKETS_FETCHED'
const ticketsFetched = (tickets) => ({
  type: TICKETS_FETCHED,
  payload: tickets
})

export const fetchTickets = (id) => (dispatch) => {
  request(`${baseUrl}/events/${id}/tickets`)
    .then(response => dispatch(ticketsFetched(response.body)))
    .catch(console.error)
}

//////////////////CREATE TICKETS ACTION/////////////////////////
export const TICKET_CREATED = 'TICKET_CREATED'
const ticketCreated = ticket => ({
  type: TICKET_CREATED,
  payload: ticket
})

export const createTicket = (id, data) => (dispatch, getState) => {
 // const jwt = getState().authUser
  const jwt = sessionStorage.getItem("token")
  
  request
    .post(`${baseUrl}/events/${id}/tickets`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => dispatch(ticketCreated(response.body.ticket)))
    .catch(console.error)
}