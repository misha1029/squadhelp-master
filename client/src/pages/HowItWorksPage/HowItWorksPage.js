import React from 'react';
import {Link} from 'react-router-dom'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './HowItWorksPage.module.sass';
import QuestionsOnPage from "../../components/QuestionsOnPage/QuestionsOnPage";
import HowItWorksFooter from "../../components/HowItWorksFooter/HowItWorksFooter";

class HowItWorks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollUp: false,
		};
	};

	hideScrollUp = () => {
		const {scrollUp} = this.state

		window.scrollY > this.prev ?
				!scrollUp && this.setState({scrollUp: true})
				:
				scrollUp && this.setState({scrollUp: false});

		this.prev = window.scrollY;
	}
	componentDidMount(){
		window.addEventListener('scroll', this.hideScrollUp);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.hideScrollUp);
	}

	render() {
		return (
				<>
					<Header id='header'/>
					<div className={styles.container}>
						<div className={styles.howItWorkHeader}>
							<div className={styles.video}>
								<iframe frameBorder="0" src="https://fast.wistia.net/embed/iframe/vfxvect60o"/>
							</div>
							<div className={styles.headerLabel}>
								<h2>How Does Squadhelp Work?</h2>
								<p>Squadhelp allows you to host branding competitions to engage with the most creative
									people across the globe and get high-quality results, fast. Thousands of creatives
									compete with each other, suggesting great name ideas. At the end of the collaborative
									contest, you select one winner. The winner gets paid, and you get a strong brand name
									that will help you succeed! It's quick, simple, and costs a fraction of an agency.
								</p>
							</div>
						</div>
						<h2 className={styles.mainSteps}>5 Simple Steps</h2>
						<div className={styles.stepContainer}>
							<div className={styles.step}>
								<div>1</div>
								<h4>Start Your Contest</h4>
								<p>Complete our fast, easy project brief template, and we’ll share it with our community of more than
									70,000 Creatives.</p>
							</div>
							<div className={styles.step}>
								<div>2</div>
								<h4>Ideas Start Pouring In</h4>
								<p>You will start receiving name ideas - created specifically for you - within minutes. Dozens of
									contestants work for you at the same time! A typical naming contest receives several hundred name
									ideas.
									All ideas are automatically checked for URL availability.</p>
							</div>
							<div className={styles.step}>
								<div>3</div>
								<h4>Collaborate and Communicate</h4>
								<p>See all your submissions from your contest dashboard. Rate entries, leave private comments, and send
									public messages, leading the process towards the perfect name.</p>
							</div>
							<div className={styles.step}>
								<div>4</div>
								<h4>Validate</h4>
								<p>Choose your name with confidence. Our unique validation process includes domain checks, trademark
									risk
									assessment, linguistics analysis, and professional audience testing.</p>
							</div>
							<div className={styles.step}>
								<div>5</div>
								<h4>Pick your winner!</h4>
								<p>Once your contest ends, announce the winner - and register the name. Come back to Squadhelp to launch
									a
									Logo Design or Tagline project for your name.</p>
							</div>
						</div>
						<div className={styles.startContestLink}>
							<Link to='/startContest'>Start a contest</Link>
						</div>
						<div className={styles.questionsContainer}>
							<div className={styles.title}>
								<div className={styles.questionsMark}>?</div>
								<h4 className={styles.questionsTitle}>Frequently Asked Questions</h4>
							</div>
							<QuestionsOnPage/>
						</div>
					</div>
					<div className={styles.getInTouch}>
						<div className={styles.getInTouchContainer}>
							<div className={styles.envelopeIcon}>
								<i className="far fa-envelope"/>
							</div>

							<div className={styles.touchInfo}>
								<h1>
									Questions?
								</h1>
								<p>Check out our <a href="#">FAQs</a> or send us a <a href="#">message</a>.
									For assistance with launching a contest, you can also call us at (877) 355-3585 or
									schedule a <a href="#">Branding Consultation</a>
								</p>
							</div>
						</div>
						<div className={styles.touchButton}>
							<a href='#'>Get in Touch</a>
						</div>
					</div>
					{
						this.state.scrollUp && <a href='#header' className={styles.scrollUp}><i className="fas fa-arrow-circle-up"/></a>
					}
					<HowItWorksFooter/>
				</>
		);
	}
};

export default HowItWorks;