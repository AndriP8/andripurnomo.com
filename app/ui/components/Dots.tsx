export const Dots = ({ bgColor = 'black' }: { bgColor?: string }) => {
  return <div className={`w-1 h-1 border-0 rounded-full ${bgColor}`} />;
};
