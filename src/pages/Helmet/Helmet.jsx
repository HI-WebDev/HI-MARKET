
const Helmet = (props) => {
    document.title = "alien-05 -" + props.title

    return <div>
        {props.children}
    </div>
}

export default Helmet
