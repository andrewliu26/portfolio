import React from 'react';

export class Card extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div
                className="w-[30] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 bg-white">
                {children}
            </div>
        );
    }
}

export default Card;
