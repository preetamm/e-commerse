import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'
import CardIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../card-dropdown/cart-dropdown.component'


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/signin'>sign in </Link>
            }

            <CardIcon></CardIcon>
        </div>{
            hidden ? null : <CartDropdown></CartDropdown>
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);

