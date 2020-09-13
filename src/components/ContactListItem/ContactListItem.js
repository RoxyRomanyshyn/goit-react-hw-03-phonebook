import React from 'react';

export default function ContactListItem({
    itemName,
    itemNumber,
    onRemoveItem
}) {

    return ( <
        >
        <
        li >
        <
        p > {
            itemName
        }: {
            itemNumber
        } < /p> <
        span >
        <
        button type = "button"
        onClick = {
            onRemoveItem
        } > Delete < /button></span >
        <
        /li> < / >
    )
}