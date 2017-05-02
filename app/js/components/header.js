var App = React.createClass({
    render: function() {
        return (
            <header>
                <a href="" className="navigation-burger-button"></a>
                <img src="img/logo.png" className="logo"/>
                <input type="search" className="search" id="search"/>
                <div className="cart">
                    <img src="img/basket.png" className="cart-img"/>
                    <span className="cart-count">$<span className="cart-count-number">300</span></span>
                </div>
            </header>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('header')
);
