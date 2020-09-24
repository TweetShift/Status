import React from 'react';
import { Panel } from '../components/statusPanel';
import axios from 'axios';
import endpoint from '../api/endpoint';

export class Website extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			icon: '',
			status: ''
		};
	}

	render() {
		if (this.state.loading === true) {
			// return <Panel service="Bot" loading={true} icon="offline" status="Offline" />;
			return <Panel service="Website" loading={true} />;
		} else if (this.state.loading === false) {
			return <Panel service="Website" loading={false} icon={this.state.icon} status={this.state.status} />;
		}
	}

	async componentDidMount() {
		await axios
			.get(`${endpoint('website')}/api/status`)
			.then((response) => {
				if (response.status === 200) {
					if (response.data.status === 'ok') {
						this.setState({
							loading: false,
							icon: 'online',
							status: 'Online'
						});
					} else {
						this.setState({
							loading: false,
							icon: 'warning',
							status: 'Partial Outage: ' + response.data.message
						});
					}
				} else {
					this.setState({
						loading: false,
						icon: 'warning',
						status: 'Partial Outage'
					});
				}
			})
			.catch((error) => {
				this.setState({
					loading: false,
					icon: 'error',
					status: `Connection issues: The web server isn't responding.`
				});
				return;
			});
	}
}
