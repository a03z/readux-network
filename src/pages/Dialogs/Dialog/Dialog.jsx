import { NavLink } from 'react-router-dom'
import s from '../../../app/styles/Dialogs/Dialogs.module.css'

export default function Dialog(props) {
    return (
        <li>
            {' '}
            <NavLink
                to={`/dialogs/${props.id}`}
                activeClassName={s.active}
                className={s.dialog}
            >
                {props.name}
            </NavLink>
        </li>
    )
}
