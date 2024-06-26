import {Link, useParams} from "react-router-dom";

function Menu() {
    return (
        <div>
            <h1>Hello Admin!, Welcome</h1>
            <h3>
                <br />
                <Link to='/adminapp' style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Take Attendance</Link> &nbsp;&nbsp;
                <Link to="/form" style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Add Student</Link> &nbsp;&nbsp;
                <Link to="/tform" style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Add Teacher</Link> &nbsp;&nbsp;
                <Link to="/classform" style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Add Class</Link> &nbsp;&nbsp;
                <Link to='/adminshowdb' style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Student</Link> &nbsp;&nbsp;
                <Link to='/showteach' style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Teachers</Link> &nbsp;&nbsp;
                <Link to='/showclass' style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Class</Link> &nbsp;&nbsp;
                <Link to="/" style={{textDecoration:'none',color:'white',backgroundColor:'skyblue',padding:'7px',border:'1px solid blue',borderRadius:'7px'}}>Logout</Link>
            </h3>
        </div>
    )
}

export default Menu;