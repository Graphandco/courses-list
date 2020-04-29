import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

export default function LikeArea() {
    const [likeCount, setLikeCount] = useState(0);

    const augmenterLesLikes = () => {
        setLikeCount((previous) => {
            return previous + 1;
        });
    };

    const baisserLesLikes = () => {
        setLikeCount((previous) => {
            if (previous <= 0) return 0;
            return previous - 1;
        });
    };

    return (
        <>
            <Button
                variant='contained'
                color='secondary'
                onClick={baisserLesLikes}
            >
                Baisser les likes
            </Button>
            <Button
                variant='contained'
                color='primary'
                onClick={augmenterLesLikes}
            >
                Augmenter les likes
            </Button>
            <h3>Cette page a été cliquée {likeCount} fois</h3>
        </>
    );
}
