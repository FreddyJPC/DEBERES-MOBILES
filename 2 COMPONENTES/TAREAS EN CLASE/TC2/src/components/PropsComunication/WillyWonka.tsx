// WillyWonkaProps.tsx
import { FC, useState } from 'react';
import { OompaLoompaProps } from "./OompaLoompa.tsx";
import './WillyWonka.css';

export const WillyWonkaProps: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");
    const [materialNeeded, setMaterialNeeded] = useState<boolean>(false);

    const changeOrders = (): void => {
        setOrders("Make more candies 🍭🍭🍭!");
    };

    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaProps orders={orders} onOrderChange={changeOrders} materialNeeded={materialNeeded} />
            {/* Actualización del estado de materialNeeded según las necesidades */}
            <button onClick={() => setMaterialNeeded(true)}>Need More Materials</button>
        </div>
    );
}
