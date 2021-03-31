import React, { useState } from 'react';
import Button from './styles';

const Example = () => {
    const [showText, setShowText] = useState(false);

    const toggleText = () => setShowText(!showText);

    return (
        <div>
            <Button onClick={toggleText}> Toggle Text </Button>
            {showText && <div> Example text </div>}
        </div>   
    );
};

export default Example;
