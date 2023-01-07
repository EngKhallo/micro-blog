import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div className="error">
            <h2>Sorry</h2>
            <p>This Page Cann't be found</p>
            <Link to="/">Back to The Home Page.....</Link>
        </div>
     );
}
 
export default ErrorPage;