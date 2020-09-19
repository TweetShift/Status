import React from 'react';
import styles from './status.module.css';
import { Panel } from '../components/statusPanel';
import { Bot } from '../services/bot';
import { Website } from '../services/website';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.refresh = this.refresh.bind(this);
	};

	render() {
		return (
			<div className={styles.app}>
				<div className={styles.logo}>
					<img src="/isolated.svg" />
				</div>
				<p className={styles.title}>TweetShift Status</p>
				<p className={styles.subtitle}>Here you can check the status of our services.</p>
				<br />

				<div className={styles.section}>
					<p className={styles.subheader}>Core services:</p>
					{/* <Panel service="Website" loading={false} icon="warning" status="Partial Outage" /> */}
					<Website />
					{/* <Panel service="Auto-Posting" loading={true} icon="offline" status="Offline" /> */}
				</div>

				<div className={styles.section}>
					<p className={styles.subheader}>Bot shards:</p>
					<Bot />
				</div>
				<button onClick={this.refresh}>Refresh</button>
			</div>
		);
	}
	
	refresh() {
		window.location.reload(false);
	}

	componentDidMount() {
		
	}
}
