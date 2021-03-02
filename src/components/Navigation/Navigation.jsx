import React from 'react';
import NavigationItem from './NavigationItem';

const Navigation = (props) => {
    const {
        items,
        ...rest
    } = props;

    return (
        <div {...rest}>
            {items.map(item =>
                <NavigationItem
                    key={item.text}
                    text={item.text}
                    icon={item.icon}
                    path={item.path}
                />
            )}
        </div>
    )
}

export default React.memo(Navigation)
