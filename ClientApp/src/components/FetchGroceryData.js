import React, { Component } from 'react';

export class FetchGroceryData extends Component {
    static displayName = FetchGroceryData.name;

    constructor(props) {
        super(props);
        this.state = {
            grocerylist: [], loading: true, sorting: { key: "name", ascending: true }
        };
    }

    componentDidMount() {
        this.populateGroceryData();
    }

    applySorting(key, ascending) {
        // Copy array to prevent data mutation
        const currentgrocerylist = [...this.state.grocerylist];

        let newAscending = this.state.sorting.key === key ? ascending : true

        // Apply sorting
        const sortedgrocerylist = currentgrocerylist.sort((a, b) => {
            if (typeof a[key] === "string")
                return a[key].localeCompare(b[key]);
            else
                return a[key] - b[key];
        });

        this.setState({
            grocerylist: newAscending ? sortedgrocerylist : sortedgrocerylist.reverse(),
            loading: false,
            sorting: { key: key, ascending: newAscending }
        });
    }

    renderGroceryListTable() {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th className="p-2" onClick={() => this.applySorting('name', !this.state.sorting.ascending)}>Name{this.state.sorting.key === 'name' && <i> {this.state.sorting.ascending ? '(asc)' : '(desc)'}</i>}</th>
                        <th className="p-2" onClick={() => this.applySorting('type', !this.state.sorting.ascending)}>Type{this.state.sorting.key === 'type' && <i> {this.state.sorting.ascending ? '(asc)' : '(desc)'}</i>}</th>
                    <th className="p-2" onClick={() => this.applySorting('amount', !this.state.sorting.ascending)}>Amount{this.state.sorting.key === 'amount' && <i> {this.state.sorting.ascending ? '(asc)' : '(desc)'}</i>}</th>
                        <th className="p-2" onClick={() => this.applySorting('price', !this.state.sorting.ascending)}>Price{this.state.sorting.key === 'price' && <i> {this.state.sorting.ascending ? '(asc)' : '(desc)'}</i>}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.grocerylist.map(groceryitem =>
                        <tr key={groceryitem.name}>
                            <td>{groceryitem.name}</td>
                            <td>{groceryitem.type}</td>
                            <td>{groceryitem.amount}</td>
                            <td>{groceryitem.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderGroceryListTable();
        return (
            <div>
                <h1 id="tabelLabel" >Grocery list</h1>
                <p>This component demonstrates fetching data from the server. Click on the columns to sort them.</p>
                {contents}
            </div>
        );
    }

    async populateGroceryData() {
        const response = await fetch('groceryitem');
        const data = await response.json();
        this.setState({ grocerylist: data, loading: false, sorting: { key: "name", ascending: true } });
    }
}


