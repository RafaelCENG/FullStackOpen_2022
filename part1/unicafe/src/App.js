import { useState } from 'react'

const Display = (props) => {
	return <div>{props.counter}</div>
}

const Button = (props) => {
	return <button onClick={props.onClick}>{props.text}</button>
}

const Average = (props) => {
	if (props.all > 0) {
		return (props.good * 1 - props.bad) / props.all
	}
}

const Positive = (props) => {
	if (props.all > 0) {
		return (props.good / props.all) * 100
	}
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
			<div>
				<h3>good</h3>
				<Display counter={good} />
			</div>
			<div>
				<h3>neutral</h3>
				<Display counter={neutral} />
			</div>
			<div>
				<h3>bad</h3>
				<Display counter={bad} />
			</div>
			<div>
				<h3>all</h3>
				<Display counter={all} />
			</div>
			<div>
				<h3>average</h3>
				<Average good={good} bad={bad} all={all} />
			</div>
			<div>
				<h3>positive</h3>
				<Positive good={good} all={all} />
			</div>
		</div>
	)
}

export default App
