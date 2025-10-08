import React from 'react';

function Recipe({data}) {
    return (
        <div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}

export default Recipe;
