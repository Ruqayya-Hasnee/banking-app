import { Link } from "react-router-dom";

const StatsCard = (props) => {
  const isAccounts = props.title === "accounts";

  return (
    <div className={`stats-card ${isAccounts ? "accounts-card" : "transactions-card"}`}>
      <div className="top">
        <div className="stats-card-heading">
          <span className="stats-icon" aria-hidden="true">
            {isAccounts ? "◉" : "↗"}
          </span>
          <div>
            <p className="title">{props.title}</p>
            <span className="stats-subtitle">
              {isAccounts ? "Manage customer accounts" : "Review activity"}
            </span>
          </div>
        </div>
        <div className="actions">
          {props.createLink ? <Link className="add-action" to={props.createLink}>+ Add</Link> : ''}
          <Link to={props.viewAllLink}>View All</Link>
        </div>
      </div>
      <div className="stats-card-content">
        <div className="stats-number">
          <span>{props.count}</span>
          <small>{props.count === 1 ? "total" : "totals"}</small>
        </div>
        <div className="stats-spark" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>
    </div>
  );
};
export default StatsCard