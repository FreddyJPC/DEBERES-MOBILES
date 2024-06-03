
export const hey = (message: string): string => {
  const trimmedMessage = message.trim();

  if (trimmedMessage === '') {
    return 'Fine. Be that way!';
  }

  const isQuestion = trimmedMessage.endsWith('?');
  const isYelling = trimmedMessage === trimmedMessage.toUpperCase() && trimmedMessage !== trimmedMessage.toLowerCase();

  if (isYelling && isQuestion) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isQuestion) {
    return 'Sure.';
  } else if (isYelling) {
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.';
  }
};

const HeyResponder = ({ message }: { message: string }) => {
  const response = hey(message);

  return (
    <div>
      <p>Mensaje: "{message}"</p>
      <p>Respuesta: "{response}"</p>
    </div>
  );
};

export default HeyResponder;
