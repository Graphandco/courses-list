import React from 'react';

export default function SuperHero(props) {
    return (
        <li>
            {props.name} est un Superhero et son vrai nom est {props.realname}
        </li>
    );
}
