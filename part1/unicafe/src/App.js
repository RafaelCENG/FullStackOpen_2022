import { useState } from 'react'


const Statistics = ({ good, bad, neutral, all }) => {
	if (all > 0) {
		const average = (good - bad) / all
		const positive = (good / all) * 100
		return (
			<div>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={all} />
				<StatisticLine text="average" value={average} />
				<StatisticLine text="positive" value={positive} />
			</div>
		)
	}
	return <div>No feedback given</div>
}

const StatisticLine = (props) => {
	console.log(props)

	return (
		<div>
			<h3>{props.text}</h3>
			{props.value}
		</div>
	)
}

const Button = (props) => {
	return <button onClick={props.onClick}>{props.text}</button>
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [all, setAll] = useState(0)

	const increaseGoodByOne = () => {
		setAll(all + 1)
		setGood(good + 1)
		// setAverage((good - bad) / all)
	}
	const increaseNeutralByOne = () => {
		setAll(all + 1)
		setNeutral(neutral + 1)
		// setAverage((good - bad) / all)
	}
	const increaseBadByOne = () => {
		setAll(all + 1)
		setBad(bad + 1)
		// setAverage((good - bad) / all)
	}

	return (
		<div>
			<h1>give feedback</h1>
			<Button onClick={increaseGoodByOne} text="good" />
			<Button onClick={increaseNeutralByOne} text="neutral" />
			<Button onClick={increaseBadByOne} text="bad" />
			<h1>statistics</h1>
			<Statistics good={good} bad={bad} all={all} neutral={neutral} />
		</div>
	)
}

export default App
