function Header(props) {

    function handleClick() {
        props.sendMessage("Hello Parent! I am Child.");
    }

    return (
        <div>
            <h1>Child Component</h1>

            <button onClick={handleClick}>
                Send Message to Parent
            </button>
        </div>
    );
}

export default Header;