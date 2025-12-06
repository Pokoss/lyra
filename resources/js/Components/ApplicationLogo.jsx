export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/images/assets/logo_totalenergies.png"
            alt="TotalEnergies — Lyra"
            onError={(e) => {
                // fallback: hide image if it can't be loaded
                e.currentTarget.style.display = 'none';
            }}
        />
    );
}
