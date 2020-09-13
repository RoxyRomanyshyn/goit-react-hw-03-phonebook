import React, {
    Component
} from 'react';
import ContactListItem from '../ContactListItem/ContactListItem'

export default function ContactList({
    visibleContacts,
    onRemove
}) {

    return ( < >
        <
        ul > {
            visibleContacts.map(({
                name,
                id,
                number
            }) => ( < ContactListItem key = {
                    id
                }
                itemName = {
                    name
                }
                itemNumber = {
                    number
                }
                onRemoveItem = {
                    () => onRemove(id)
                }
                />
            ))
        } < /ul> </ >
    )
}