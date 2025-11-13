type CalloutProps = {
  type?: 'info' | 'warning';
  title?: string;
  children: React.ReactNode;
};

export const Callout = ({ type = 'info', title, children }: CalloutProps) => {
  const isWarning = type === 'warning';
  const borderColor = isWarning ? '#ff6b35' : '#00ff88';
  const bgColor = isWarning
    ? 'rgba(255, 107, 53, 0.05)'
    : 'rgba(255, 255, 255, 0.03)';
  const titleColor = isWarning ? '#ff6b35' : '#00ff88';
  const icon = isWarning ? '⚠️' : '💡';

  return (
    <div
      className="rounded-lg p-5 my-8"
      style={{
        background: bgColor,
        borderLeft: `4px solid ${borderColor}`,
      }}
    >
      {title && (
        <div
          className="font-semibold mb-3 flex items-center gap-3"
          style={{ color: titleColor }}
        >
          <span>{icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-[#e0e0e0]">{children}</div>
    </div>
  );
};
