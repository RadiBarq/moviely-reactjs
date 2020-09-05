import React from 'react'

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {

    return (
        <ul className="list-group">
            {items.map(item =>
                <li onClick = {() => onItemSelect(item)} key={item[textProperty]} className= {selectedItem === item ? 'list-group-item active' : 'list-group-item'} >{item[valueProperty]}</li>
            )}
        </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: '_id',
    valueProperty: 'name'
}

export default ListGroup