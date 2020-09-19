import React from 'react';
import styles from './statusPanel.module.css';
import PulseLoader from 'react-spinners/PulseLoader'

export class Panel extends React.Component {
	render() {
        if (this.props.loading) {
            return (
			<div className={styles.panel}>
                <p className={styles.service}>{this.props.service}</p>
                <div className={styles.status}>
                    <PulseLoader size={10} />
                </div>
			</div>
            )
        } else {
		return (
			<div className={styles.panel}>
                <p className={styles.service}>{this.props.service}</p>
                <div className={styles.status}>
				    <img alt="online" src={`/statuses/${this.props.icon}.png`} />
                    <p>{this.props.status}</p>
                </div>
			</div>
        );
        }
	}
}
