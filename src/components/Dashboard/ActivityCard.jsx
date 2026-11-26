
function ActivityCard({ title, source, status, time, color }) {

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-100">

            {/* Article Information */}
            <div>
                <h3 className="font-semibold text-gray-800">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                    {source}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                    {time}
                </p>
            </div>

            {/* Verification Status */}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
                {status}
            </span>

        </div>
    );
}

export default ActivityCard;
