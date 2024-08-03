import { useSelector } from 'react-redux'
import { CartIcon } from '../../assests/icons'
import './Navbar.scss'
const navbar = () => {
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux-Toolkit</h3>
        <div className='nav-container'>
          <CartIcon className='CartIcon' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
