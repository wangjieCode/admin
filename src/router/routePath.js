const map = {
	home: () => import('@/views/Home'),
	about: () => import('@/views/About'),
	check: () => import('@/views/check')
}
export default file => {
	return map[file] || null
}