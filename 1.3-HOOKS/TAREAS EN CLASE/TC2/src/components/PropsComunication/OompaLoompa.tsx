// OompaLoompaProps.tsx
import { FC, useState } from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
    materialNeeded: boolean; // Nuevo prop para indicar si se necesitan más materiales
}

export const OompaLoompaProps: FC<OompaLoompaProps> = ({ orders, onOrderChange, materialNeeded }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);

        if (clickCount >= 3) {
            onOrderChange();
        }
    };

    return (
        <div className="backgroundOompaLoompa">
            <h1 className="oompaLoompa">{orders}</h1>
            <button onClick={handleClick}>Change Orders</button>
            <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
            {materialNeeded && <p>¡Los Oompa Loompa necesitan más materiales!</p>}
        </div>
    );
};
