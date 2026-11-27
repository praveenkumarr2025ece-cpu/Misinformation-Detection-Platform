
function TaskCard({ title, count, description, icon: Icon, color }) {

    return (
        <div className="bg-card text-card-foreground p-6 rounded-xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

            <div className="flex items-center justify-between mb-4">

                <h3 className="text-muted-foreground font-medium">
                    {title}
                </h3>

                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon size={22} />
                </div>

            </div>

            <h2 className="text-3xl font-bold mb-2">
                {count}
            </h2>

            <p className="text-sm text-muted-foreground">
                {description}
            </p>

        </div>
    );
}

export default TaskCard;
