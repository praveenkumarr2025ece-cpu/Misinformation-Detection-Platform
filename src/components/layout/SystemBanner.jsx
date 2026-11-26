
function SystemBanner() {

    const status = import.meta.env.VITE_SYSTEM_STATUS;

    const bannerDetails = {
        operational: {
            message: "All Systems Operational",
            color: "bg-green-100 text-green-800"
        },

        maintenance: {
            message: "System Under Maintenance",
            color: "bg-yellow-100 text-yellow-800"
        },

        unavailable: {
            message: "System Currently Unavailable",
            color: "bg-red-100 text-red-800"
        }
    };

    const currentBanner =
        bannerDetails[status] || bannerDetails.unavailable;

    return (
        <div className={`w-full p-3 text-center font-medium ${currentBanner.color}`}>
            {currentBanner.message}
        </div>
    );
}

export default SystemBanner;
