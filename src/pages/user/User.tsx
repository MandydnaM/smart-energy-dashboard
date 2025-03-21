import './user.scss'
import Singel from "../../components/single/Singel"
import { singleUser } from '../../data'

function User() {
    return (
        <div className='employee'>
            <Singel {...singleUser} />
        </div>
    )
}

export default User