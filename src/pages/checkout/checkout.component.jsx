import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import  CheckoutItem  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe.component';

import './checkout.style.scss';

export const CheckoutPage = ({cartItems, total}) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem}/>
				)
			)
		}
		<div className='total'>
			<span>TOTAL: $ {total}</span>
		</div>
		<div className='test-warning'>
			*P lease use the following test credit card for payments *
			<br />
			42424 42424 4242 42424 - Exp: any future data - CVV any 3 digit
			Source: https://stripe.com/docs/testing#cards
		</div>
		<br />
		<StripeCheckoutButton price={total}/>

	</div>

)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)