import HeyResponder from './components/exercism12';

const App = () => {
  return (
    <div>
      <h1>Hey Responder</h1>
      <HeyResponder message="HOW ARE YOU?" />
      <HeyResponder message="How are you?" />
      <HeyResponder message="    " />
      <HeyResponder message="Hey" />
    </div>
  );
};

export default App;
