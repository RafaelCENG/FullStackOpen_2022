// const reverse = (string) => {
// 	return string.split('').reverse().join('')
// }

// const average = (array) => {
// 	const reducer = (sum, item) => {
// 		return sum + item
// 	}

// 	return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length
// }

const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	const reducer = (sum, item) => {
		return sum + item.likes
	}

	return blogs.reduce(reducer, 0)
}

module.exports = {
	dummy,
	totalLikes,
}
