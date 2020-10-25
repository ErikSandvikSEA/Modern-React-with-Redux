function Route(props) {
    const { path, children } = props
    return window.location.pathname === path ? children : null
}

export default Route
