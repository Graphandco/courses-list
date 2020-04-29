import React from 'react';
import Button from '@material-ui/core/Button';

export default function SuperHero(props) {
    const deleteSuperHero = () => {
        console.log('delete');
    };

    return (
        <li>
            <span>
                {props.name} est un Superhero et son vrai nom est{' '}
                {props.realname}
            </span>
            <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={deleteSuperHero}
            >
                Supprimer
            </Button>
        </li>
    );
}
