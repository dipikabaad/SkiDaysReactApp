//import { Component } from 'react'
//import ReactDOM from 'react-dom'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {PropTypes} from 'react'

/*export class SkiDayCount extends Component {
	percentToDecimal(decimal) {
		return ((decimal*100) + '%')
	}
	calcGoalProgress(total, goal){
		return this.percentToDecimal(total/goal)
	}
	render(){
		return(
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span>days</span>
				</div>
				<div>
					<span>{this.calcGoalProgress(
					this.props.total,
					this.props.goal)}</span>
				</div>
			</div>
		)
	}

}*/

const percentToDecimal = (decimal) => {
		return ((decimal*100) + '%')
}
const calcGoalProgress = (total, goal) => {
		return percentToDecimal(total/goal)
}
	
export const SkiDayCount = ({total = 70, powder=20, backcountry=10, goal=100}) => (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{total}</span>
					    <Calendar />
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{powder}</span>
					    <SnowFlake />
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{backcountry}</span>
					   <Terrain />
					<span>days</span>
				</div>
				<div>
					<span>{calcGoalProgress(
					total,
					goal)}</span>
				</div>
			</div>

)


/*SkiDayCount.defaultProps = {
	total: 50,
	powder: 10,
	backcountry: 15,
	goal: 75
}*/

SkiDayCount.propTypes = {
	total: PropTypes.number,
	powder: PropTypes.number,
	backcountry: PropTypes.number,
	goal: PropTypes.number
}
