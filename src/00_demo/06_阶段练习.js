import React, {Component} from "react";
import formatPrice from "../format_utils";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            books: [
                {
                    id: 1,
                    name: "《算法导论》",
                    date: "2006-9",
                    price: 85.0,
                    count: 1,
                },
                {
                    id: 2,
                    name: "《UNIX编程艺术》",
                    date: "2006-2",
                    price: 59.0,
                    count: 1,
                },
                {
                    id: 3,
                    name: "《编程珠玑》",
                    date: "2008-10",
                    price: 39.0,
                    count: 1,
                },
                {
                    id: 4,
                    name: "《代码大全》",
                    date: "2006-3",
                    price: 128.0,
                    count: 1,
                },
            ],
        };
    }

    render() {
        return this.state.books.length ? this.renderBooks() : this.renderEmptyTip();
    }

    getTotalPrice() {
        /*let totalPrice = 0;
        for (const item of this.state.books) {
            totalPrice += item.price * item.count
        }*/
        // reduce的2个参数: 第一个参数是上一次回调函数的结果(上一次的回调函数的结果), 第二个参数: 使用的初始化值
        let totalPrice = this.state.books.reduce((previousValue, item) => {
            return previousValue + item.price * item.count;
        }, 0);
        return formatPrice(totalPrice);
    }

    removeBook(index) {
        // 所谓state的不可变性: 更改state里面的数据永远要用setState方法
        this.setState({
            books: this.state.books.filter((value, idx) => index !== idx),
        });
    }

    changeBookCount(index, number) {
        const books = [...this.state.books];
        books[index].count += number;
        this.setState({
            books: books,
        });
    }

    renderBooks() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>书籍名称</th>
                        <th>出版日期</th>
                        <th>价格</th>
                        <th>购买数量</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.books.map((item, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{formatPrice(item.price)}</td>
                                <td>
                                    <button
                                        onClick={(event) => this.changeBookCount(index, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="count">{item.count}</span>
                                    <button
                                        onClick={(event) => this.changeBookCount(index, +1)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button onClick={(event) => this.removeBook(index)}>
                                        移除
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <h2>总价格: {this.getTotalPrice()}</h2>
            </div>
        );
    }

    renderEmptyTip() {
        return <h2>购物车为空~</h2>;
    }
}
