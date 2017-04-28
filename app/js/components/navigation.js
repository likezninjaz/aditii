var Navigation = React.createClass({
    render: function() {
        return (
            <nav className="navigation">
                <a href="">HOME</a>
                <a href="">SALE</a>
                <a href="">HANDBAGS</a>
                <a href="">WALLETS</a>
                <a href="">ACCESSORIES</a>
                <a href="">MENS STORE</a>
                <a href="">SHOES</a>
                <a href="">VINTAGE</a>
                <a href="">SERVICES</a>
                <a href="">CONTACT US</a>
            </nav>
        );
    }
});

ReactDOM.render(
    <Navigation />,
    document.getElementById('navigation')
);
