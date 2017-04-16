/**
 * Created by David on 4/15/17.
 */
import React from 'react'


class ProductFilter extends React.Component {

    constructor (props) {
        super (props);
        this.handleSubmit = this.handleSubmit.bind (this);
        this.handleRadioButtonChange = this.handleRadioButtonChange.bind (this);
        this.state = {
            sortBy: props.sortBy
        }
    }

    componentWillReceiveProps (nextProps) {
        const { sortBy } = nextProps;
        this.setState ({ sortBy })
    }

    handleSubmit (event) {
        event.preventDefault ();
        const sortBy = event.target.elements.sort.value;
        this.props.onSubmit ({ sortBy });
    }

    handleRadioButtonChange (event) {
        const sortBy = event.target.value;
        this.setState ({ sortBy })
    }

    render () {

        const {
            sortBy
        } = this.state;

        return (
            <form action="/" method="get" onSubmit={event => this.handleSubmit (event)}>
    <b>sort by</b>
        <FilterItem label="Name" value="name" checked={sortBy === 'name'} onChange={this.handleRadioButtonChange} />
    <FilterItem label="Price" value="price" checked={sortBy === 'price'} onChange={this.handleRadioButtonChange} />
    <button type="submit">submit</button>
            </form>
    );
    }
}

const FilterItem = ({
    label,
    value,
    checked,
    onChange
}) => (
<span>
<input type="radio" name="sort" value={value} id={`sort-${value}`} checked={checked} onChange={onChange}></input>
    <label htmlFor={`sort-${value}`}>{label}</label>
</span>
);

export default ProductFilter;
