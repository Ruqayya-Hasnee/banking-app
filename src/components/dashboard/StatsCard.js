import { Link } from "react-router-dom";

const StatsCard = (props) => {
    console.log(props)
  return (
    <div className="stats-card">
      <div className="top">
        <p>{props.title}</p>
        <div className="button">
          <button>+Add new account</button>
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