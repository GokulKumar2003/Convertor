import {Link, useNavigate} from 'react-router-dom'

export default function Home(){

    return(

        <>
        <h2>Welcome to Gokul's Convertor</h2>
        <button><Link to='/length'>Length Convertor</Link></button><br /><br />
        <button><Link to='/area'>Area Convertor</Link></button><br /><br />
        <button><Link to='/time'>Time Convertor</Link></button><br /><br />
        </>
    )
}