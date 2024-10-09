import { Link } from "react-router-dom";

const StatsCard = (props) => {
    console.log(props)
  return (
    <div className="stats-card">
      <div className="top">
        <p className="title">{props.title}</p>
        <div className="actions">
          {props.createLink ? <Link to={props.createLink}>+Add</Link> : ''}
          <Link to={props.viewAllLink}>View All</Link>
        </div>
      </div>
      <hr />
      <div className="center">
        <p>1</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default StatsCard