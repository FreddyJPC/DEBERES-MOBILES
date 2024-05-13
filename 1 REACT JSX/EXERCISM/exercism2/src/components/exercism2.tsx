import React from 'react';

interface CookieDistributionProps {
    name: string;
}

class CookieDistribution extends React.Component<CookieDistributionProps> {
    render() {
        const { name } = this.props;
        let message;

        if (name === 'Do-yun') {
            message = `One for Do-yun, one for me.`;
        } else {
            message = `One for ${name}, one for me.`;
        }

        return <div>{message}</div>;
    }
}

export default CookieDistribution;
