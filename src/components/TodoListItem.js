import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return <span style={style}>{label}</span>;
};

export default TodoListItem;

TodoListItem.propTypes = {
    important: PropTypes.bool,
    label: PropTypes.string.isRequired
};