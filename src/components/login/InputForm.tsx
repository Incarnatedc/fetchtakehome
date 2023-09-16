import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { isValidEmail } from '../../util/util';

type InputProps = {
  type: 'string' | 'email' | 'password';
  name: string;
  label: string;
  value: string,
  onChange: (value: string) => void
}

const iconMap: Record<InputProps['name'], React.ReactNode> = {
  username: <FaUser className="w-4 h-4 text-gray-500" />,
  email: <FaEnvelope className="w-4 h-4 text-gray-500" />,
  password: <FaLock className="w-4 h-4 text-gray-500" />,
}

const INVALID_EMAIL_MESSAGE = 'Invalid email address';

export default function InputForm({type, name, label, value, onChange}: InputProps) {
  const [error, setError] = useState('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
    if(type === 'email' && value !== '' && !isValidEmail(ev.target.value)){
      setError(INVALID_EMAIL_MESSAGE);
    }else{
      setError('');
    }
  }

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          {iconMap[name]}
        </span>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${
            error ? 'border-red-500 pr-10' : 'pr-10'
          }`}
          type={type}
          placeholder={label}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {error && (
          <p className="text-red-500 text-xs mt-1 absolute right-3 bottom-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}