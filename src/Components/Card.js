import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
	return (
		<div className="col-md-4 col-10 mx-auto">
			<div className="card ">
				<img src={props.imgsrc} className="card-img-top" alt="img" />
				<div className="card-body">
					<h5
						className="card-title"
						style={{
							fontWeight: 'bold'
						}}
					>
						{' '}
						  {props.title}  {' '}
					</h5>{' '}
					 <p className="card-text"> Click on the below link for more details </p>  {' '}
					<NavLink to="" className="btn btn-primary">
						Go somewhere  {' '}
					</NavLink>{' '}
					  {' '}
				</div>{' '}
				  {' '}
			</div>{' '}
			  {' '}
		</div>
	);
};
export default Card;
