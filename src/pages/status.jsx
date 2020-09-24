import React from 'react';
import styles from './status.module.css';
import { Bot } from '../services/bot';
import MoonLoader from 'react-spinners/MoonLoader';
import { Website } from '../services/website';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		this.refresh = this.refresh.bind(this);
	}

	render() {
		return (
			<div className={styles.app}>
				<div className={styles.logo}>
					<img alt="logo" src="/isolated.svg" />
				</div>
				<p className={styles.title}>TweetShift Status</p>
				<p className={styles.subtitle}>Here you can check the status of our services.</p>
				<br />

				{this.state.show && (
					<div>
						<div className={styles.section}>
							<p className={styles.subheader}>Core services:</p>
							<Website />
						</div>

						<div className={styles.section}>
							<p className={styles.subheader}>Bot shards:</p>
							<Bot />
						</div>
						<button onClick={this.refresh}>Refresh</button>
					</div>
				)}
				{!this.state.show && (
					<div className={styles.centerLoader}>
						<MoonLoader />
					</div>
				)}
			</div>
		);
	}

	refresh() {
		const number = Math.floor(Math.random() * 800) + 200;
		this.setState({
			show: false
		});
		setTimeout(
			function() {
				//Start the timer
				this.setState({ show: true }); //After 1 second, set render to true
			}.bind(this),
			number
		);
	}

	componentDidMount() {
		this.setState({
			show: true
		});
	}
}
