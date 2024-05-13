// WillyWonkaState.tsx
import { FC, useState } from 'react';
import { OompaLoompaState } from "./OompaLoompa.tsx";
import './WillyWonka.css';

export const WillyWonkaState: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");
    const [materialNeeded, setMaterialNeeded] = useState<boolean>(false);

    const changeOrders = (): void => {
        setOrders("Make more candies 🍭🍭🍭!");
    };

    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaState orders={orders} onOrderChange={changeOrders} materialNeeded={materialNeeded} setMaterialNeeded={setMaterialNeeded} />
        </div>
    );
}
