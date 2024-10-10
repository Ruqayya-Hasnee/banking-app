import { Link } from "react-router-dom";

const StatsCard = (props) => {
  return (
    <div className="stats-card">
      <div className="top">
        <p className="title">{props.title}</p>
        <div className="actions">
          {props.createLink ? <Link to={props.createLink}>+Add</Link> : ''}
          <Link to={props.viewAllLink}>View All</Link>
        </div>
      </div>
      <div className="stats-card-content">
        <p>1</p>
      </div>
    </div>
  );
};
export default StatsCard