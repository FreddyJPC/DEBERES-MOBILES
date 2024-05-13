// OompaLoompaState.tsx
import { FC, useState } from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
    materialNeeded: boolean; // Nuevo prop para indicar si se necesitan más materiales
    setMaterialNeeded: (value: boolean) => void; // Nuevo prop para actualizar el estado de materialNeeded
}

export const OompaLoompaState: FC<OompaLoompaProps> = ({ orders, onOrderChange, materialNeeded, setMaterialNeeded }) => {
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
            <button onClick={() => setMaterialNeeded(true)}>Need More Materials</button> {/* Actualizar el estado de materialNeeded */}
        </div>
    );
};
