
function ActivityCard({ title, source, status, time, color }) {

    return (
        <div className="flex items-center justify-between p-4 border-b border-border">

            <div>

                <h3 className="font-semibold text-card-foreground">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                    {source}
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                    {time}
                </p>

            </div>

            <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
                {status}
            </span>

        </div>
    );
}

export default ActivityCard;
