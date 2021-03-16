import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';

const Common = (props) => {
	var style = {};
	return (
		<div>
			<section
				className="display-flex align-items-center"
				style={{
					width: '100%',
					height: '80vh'
				}}
			>
				<div className="container-fluid nav-bg">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div
									className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
									style={{
										marginBottom: '50px'
									}}
								>
									<h1
										style={{
											fontSize: '48px',
											fontWeight: '700',
											color: 'black'
										}}
									>
										{' '}
										  {props.name}  {' '}
										<strong
											style={{
												color: '#3398db'
											}}
										>
											{' '}
											 React  {' '}
										</strong>{' '}
										  {' '}
									</h1>{' '}
									  {' '}
									<h5 className="my-3">
										React is a very beautiful language...You will like it too  {' '}
									</h5>{' '}
									  {' '}
									<div className="mt-3">
										<NavLink to={props.visit} className="btn  btn-lg">
											{' '}
											  {props.btname}  {' '}
										</NavLink>{' '}
										  {' '}
									</div>{' '}
									  {' '}
								</div>{' '}
								  {' '}
								<div className="col-lg-6 order-1 order-lg-2 header ">
									<img src={props.imgsrc} className="img-fluid animated" alt="fluid" />
								</div>{' '}
								  {' '}
							</div>{' '}
							  {' '}
						</div>{' '}
						  {' '}
					</div>{' '}
					  {' '}
				</div>{' '}
				  {' '}
			</section>{' '}
			  {' '}
		</div>
	);
};
export default Common;
