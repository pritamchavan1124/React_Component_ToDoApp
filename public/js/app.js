'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var items = [{ id: 1, title: 'read java book', status: 'complete' }, { id: 2, title: 'read react book', status: 'pending' }, { id: 1, title: 'read sql book', status: 'open' }, { id: 1, title: 'read dotnet book', status: 'start' }];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: 'Its Pritam', subtitle: 'Happy new year to all' }),
                React.createElement(ToDoItemList, { items: items }),
                React.createElement(Footer, { message: 'copyrighted to PRITAM CHAVAN' })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'title' },
                React.createElement(
                    'h2',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var AddToDoItem = function (_React$Component3) {
    _inherits(AddToDoItem, _React$Component3);

    function AddToDoItem() {
        _classCallCheck(this, AddToDoItem);

        return _possibleConstructorReturn(this, (AddToDoItem.__proto__ || Object.getPrototypeOf(AddToDoItem)).apply(this, arguments));
    }

    _createClass(AddToDoItem, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'add-todo' },
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'div',
                        { className: 'input-group mb-3' },
                        React.createElement('textarea', { name: 'itemtext', className: 'form-control', rows: '3', placeholder: 'Enter your ToDo app hear' }),
                        React.createElement(
                            'button',
                            { className: 'btn btn-success', type: 'submit', id: 'button-addon2' },
                            'ADD'
                        )
                    )
                )
            );
        }
    }]);

    return AddToDoItem;
}(React.Component);

var ToDoItemList = function (_React$Component4) {
    _inherits(ToDoItemList, _React$Component4);

    function ToDoItemList() {
        _classCallCheck(this, ToDoItemList);

        return _possibleConstructorReturn(this, (ToDoItemList.__proto__ || Object.getPrototypeOf(ToDoItemList)).apply(this, arguments));
    }

    _createClass(ToDoItemList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'item-list' },
                this.props.items.map(function (item) {
                    return React.createElement(
                        'div',
                        { className: 'item' },
                        React.createElement(
                            'div',
                            { 'class': 'input-group mb-3' },
                            React.createElement('input', { value: item.title, type: 'text', className: 'form-control', readonly: true }),
                            React.createElement(
                                'button',
                                { onClick: function onClick() {
                                        markItemComplete(item);
                                    }, className: 'btn btn-danger', type: 'button', id: 'button-addon2' },
                                'Complete'
                            )
                        )
                    );
                })
            );
        }
    }]);

    return ToDoItemList;
}(React.Component);

var Footer = function (_React$Component5) {
    _inherits(Footer, _React$Component5);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'footer' },
                React.createElement(
                    'h3',
                    null,
                    this.props.message
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
