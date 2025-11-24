const Button = ({ text, onClick, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
  >
    {text}
  </button>
);

export default Button;
