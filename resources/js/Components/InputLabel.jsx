export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium  text-gray-700 dark:text-gray-300  text-md` + className}>
            {value ? value : children}
        </label>
    );
}
