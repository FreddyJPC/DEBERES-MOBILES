// WillyWonkaEvent.tsx
import { FC, useState } from 'react';
import { OompaLoompaEvent } from "./OompaLoompa.tsx";
import './WillyWonka.css';

export const WillyWonkaEvent: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");
    const [message, setMessage] = useState<string>("");

    const changeOrders = (): void => {
        setOrders("Make more candies 🍭🍭🍭!");
    };

    const handleMaterialNeeded = (): void => {
        setMessage("¡Los Oompa Loompa necesitan más materiales!"); // Muestra un mensaje cuando se necesitan más materiales
    };

    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaEvent orders={orders} onOrderChange={changeOrders} onMaterialNeeded={handleMaterialNeeded} />
            <p>{message}</p> {/* Mostrar el mensaje */}
        </div>
    );
}
