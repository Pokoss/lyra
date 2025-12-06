export default function StatusBadge({ status = 'healthy' }) {
    const classes = {
        healthy: 'bg-green-100 text-green-800',
        medium: 'bg-yellow-100 text-yellow-800',
        low: 'bg-red-100 text-red-800',
    };

    const label = status === 'healthy' ? 'Healthy' : status === 'medium' ? 'Medium' : 'Low';

    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${classes[status]}`}>
            {label}
        </span>
    );
}
