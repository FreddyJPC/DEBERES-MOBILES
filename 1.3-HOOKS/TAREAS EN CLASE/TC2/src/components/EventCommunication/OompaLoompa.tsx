// OompaLoompaEvent.tsx
import { FC, useState } from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
    onMaterialNeeded: () => void; // Nuevo prop para enviar el evento de materiales necesarios
}

export const OompaLoompaEvent: FC<OompaLoompaProps> = ({ orders, onOrderChange, onMaterialNeeded }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);

        if (clickCount >= 2) {
            onMaterialNeeded(); // Emitir evento de materiales necesarios
        }

        onOrderChange();
    };

    return (
        <div className="backgroundOompaLoompa">
            <h1 className="oompaLoompa">{orders}</h1>
            <button onClick={handleClick}>Change Orders</button>
            <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
        </div>
    );
};
