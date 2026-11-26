import ActivityCard from '../components/dashboard/ActivityCard';
import TaskCard from '../components/dashboard/TaskCard';
import {
    Clock,
    CheckCircle,
    ShieldAlert,
    Loader
} from 'lucide-react';

import Sidebar from '../components/layout/Sidebar';
function Home() {

    
return (
    <div className="flex min-h-screen bg-gray-50">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome to TruthLens!
            </h1>
              <p className="text-gray-500 mb-8">
                Your misinformation detection workspace.
            </p>


<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

    <TaskCard
        title="Pending"
        count={12}
        description="Pending verification"
        icon={Clock}
        color="bg-yellow-100 text-yellow-700"
    />

    <TaskCard
        title="Verified"
        count={28}
        description="Verified articles"
        icon={CheckCircle}
        color="bg-green-100 text-green-700"
    />

    <TaskCard
        title="Fake News"
        count={5}
        description="Detected articles"
        icon={ShieldAlert}
        color="bg-red-100 text-red-700"
    />

    <TaskCard
        title="Under Review"
        count={8}
        description="Currently reviewing"
        icon={Loader}
        color="bg-blue-100 text-blue-700"
    />

</div>


          
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

    <h2 className="text-xl font-semibold mb-4">
        Recent Verification Activity
        <ActivityCard
        title="Election result news submitted"
        source="Source: Example News"
        status="Pending"
        time="10 minutes ago"
        color="bg-yellow-100 text-yellow-700"
        />
        <ActivityCard
            title="Government announcement verified"
            source="Source: Official Government Website"
            status="Verified"
            time="30 minutes ago"
            color="bg-green-100 text-green-700"
        />
                <ActivityCard
            title="Viral social media claim detected"
            source="Source: Social Media"
            status="Fake News"
            time="1 hour ago"
            color="bg-red-100 text-red-700"
        />
    </h2>

</div>
            

         

        </main>

    </div>
);

}

export default Home;