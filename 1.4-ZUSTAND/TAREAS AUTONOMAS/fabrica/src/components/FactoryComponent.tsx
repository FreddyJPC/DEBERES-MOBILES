import { create } from 'zustand';

interface FactoryState {
  ballsProduced: number;
  ballsDistributed: number;
  produceBall: () => void;
  distributeBall: () => void;
}

const useFactoryStore = create<FactoryState>((set) => ({
  ballsProduced: 0,
  ballsDistributed: 0,
  produceBall: () => set((state) => ({ ...state, ballsProduced: state.ballsProduced + 1 })),
  distributeBall: () => set((state) => ({ ...state, ballsDistributed: state.ballsDistributed + 1 })),
}));

const ProductionComponent = () => {
  const produceBall = useFactoryStore((state) => state.produceBall);

  const handleProduceBall = () => {
    produceBall();
    console.log("¡Una pelota de fútbol ha sido producida!");
  };

  return (
    <button onClick={handleProduceBall}>Producir Pelota de Fútbol</button>
  );
};

const DistributionComponent = () => {
  const distributeBall = useFactoryStore((state) => state.distributeBall);

  const handleDistributeBall = () => {
    distributeBall();
    console.log("¡Una pelota de fútbol ha sido distribuida!");
  };

  return (
    <button onClick={handleDistributeBall}>Distribuir Pelota de Fútbol</button>
  );
};

const FactoryStateDisplay = () => {
  const ballsProduced = useFactoryStore((state) => state.ballsProduced);
  const ballsDistributed = useFactoryStore((state) => state.ballsDistributed);

  return (
    <div>
      <h2>Estado de la Fábrica de Pelotas de Fútbol</h2>
      <p>Pelotas Producidas: {ballsProduced}</p>
      <p>Pelotas Distribuidas: {ballsDistributed}</p>
    </div>
  );
};

const FactoryComponent = () => {
  return (
    <div>
      <h1>Fábrica de Pelotas de Fútbol</h1>
      <ProductionComponent />
      <DistributionComponent />
      <FactoryStateDisplay />
    </div>
  );
};

export default FactoryComponent;
