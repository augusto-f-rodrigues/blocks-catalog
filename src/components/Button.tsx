interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="flex h-12 w-[294px] items-center justify-center rounded-lg bg-gradient-to-r from-gradient-end to-gradient-start text-start text-white p-1">
      <div className="flex items-center p-4 h-full w-full transition hover:bg-cinza-800 rounded-lg">
      <span className="flex-grow">{text}</span>
      <span className="pr-1">|</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>

      </div>
      
    </button>
  );
}
