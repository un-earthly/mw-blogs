import { Loader } from 'lucide-react';


const LoadingSpinner = ({ size = 24, text = '', className = '' }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Loader
                size={size}
                className="animate-spin text-gray-500"
                strokeWidth={2.5}
            />
            {text && <span className="text-sm text-gray-600">{text}</span>}
        </div>
    );
};

export default LoadingSpinner;
