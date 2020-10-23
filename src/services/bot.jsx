import React from 'react';
import { Panel } from '../components/statusPanel';
import BarLoader from 'react-spinners/BarLoader';
import axios from 'axios';
import endpoint from '../api/endpoint';

export class Bot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			icon: '',
			status: '',
			shards: undefined
		};
	}

	render() {
		if (this.state.loading === true) {
			// return <Panel service="Bot" loading={true} icon="offline" status="Offline" />;
			return <BarLoader />;
		} else if (this.state.loading === false) {
			if (!this.state.shards) {
				return <Panel service="Bot" loading={false} icon={this.state.icon} status={this.state.status} />;
			} else {
				const botShards = this.state.shards;
				var shards = botShards.map(function(s) {
					if (s.online) {
						let icon = 'online'
						let status = `Online: ${s.ping}ms`
						if (s.ping < 0) {
							icon = 'warning'
							status = 'Partial outage: Gateway connection failing.'
						}
						return (
							<Panel
								key={s.id}
								service={`Shard ${s.id}`}
								loading={false}
								icon={icon}
								status={status}
							/>
						);
					} else {
						return (
							<Panel
								key={s.id}
								service={`Shard ${s.id}`}
								loading={false}
								icon={'offline'}
								status="Unavailable"
							/>
						);
					}
				});

				return shards;
			}
		}
	}

	async componentDidMount() {
		await axios
			.get(`${endpoint('shards')}/api/api`)
			.then((response) => {
				this.setState({
					loading: false,
					icon: 'online',
					status: 'Online',
					shards: response.data.shards
				});
			})
			.catch((error) => {
				this.setState({
					loading: false,
					icon: 'error',
					status: `Sharder unavailable: This likely means that the bot is offline.`
				});
				return;
			});
	}
}
