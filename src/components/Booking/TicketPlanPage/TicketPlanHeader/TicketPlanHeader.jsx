import "./TicketPlanHeader.scss"

const TicketPlanHeader = () => {
  return (
    <div className="ticket-plan-header">
      <div className=" container flex flex-column justify-content-center align-items-center">
      <h3 className="movie-name text-7xl bold uppercase">venus</h3>
      <div className="movie-lang">
         <span>English</span>
      </div>
      </div>
    </div>
  )
}

export default TicketPlanHeader