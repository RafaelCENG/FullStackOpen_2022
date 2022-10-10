const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part) => {
				return <Part key={part.id} part={part} />
			})}
		</>
	)
}

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
)

const Total = ({ parts }) => {
	let initialValue = 0
	const total = parts.reduce((s, p) => {
		return s + p.exercises
	}, initialValue)
	return <h3>total of {total} exercises</h3>
}

export default Course
