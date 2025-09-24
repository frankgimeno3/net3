type IconProps = {
  size?: number | string;
  color?: string;
};

export const GoogleIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 11.998v4.998h6.994c-.298 1.698-1.966 4.998-6.994 4.998-4.21 0-7.63-3.41-7.63-7.63s3.42-7.63 7.63-7.63c2.402 0 4.014 1.04 4.936 1.936l3.37-3.37C18.005 2.207 15.466 1 12 1 5.373 1 0 6.373 0 12s5.373 11 12 11c6.016 0 11-4.984 11-11 0-.734-.064-1.45-.182-2.146H12z" />
  </svg>
);
