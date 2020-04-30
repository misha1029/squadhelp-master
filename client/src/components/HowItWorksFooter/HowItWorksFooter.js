import React, {Component} from 'react';
import styles from './HowItWorksFooter.module.sass';
import CONSTANTS from '../../constants';


class HowItWorksFooter extends Component {

	topFooterItemsRender = (item) => {
		return (
				<div key={item.titletop}>
					<h4>{item.titletop}</h4>
					{item.itemstop.map(i => <a key={i} href="https://google.com">{i}</a>)}
				</div>
		);
	};

	topFooterRender() {
		return CONSTANTS.FooterItemsTop.map(item => this.topFooterItemsRender(item))
	};


	bottomFooterItemsRender = (item) => {
		return (
				<div key={item.titleBottom}>
					{item.itemsBottom.map(i => <a key={i} href="https://google.com">{i}</a>)}
				</div>
		);
	};

	bottomFooterRender() {
		return CONSTANTS.FooterItemsBottom.map(item => this.bottomFooterItemsRender(item))
	};

	render() {
		return (
				<div className={styles.container}>
					<div className={styles.footerContainer}>
						<div className={styles.footerTop}>
							<div>
								{this.topFooterRender()}
							</div>
						</div>
						<h2>Featured Categories</h2>
						<div className={styles.footerTop}>
							<div>
								{this.bottomFooterRender()}
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default HowItWorksFooter;