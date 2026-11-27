
import { useState } from 'react';

import {
    FileText,
    Clock,
    CheckCircle,
    ShieldAlert
} from 'lucide-react';

function Reports() {

    const [articles] = useState(() => {
        return JSON.parse(localStorage.getItem('articles') || '[]');
    });

    const totalArticles = articles.length;

    const pendingArticles = articles.filter(
        (article) => article.status === 'Pending'
    ).length;

    const verifiedArticles = articles.filter(
        (article) => article.status === 'Verified'
    ).length;

    const fakeArticles = articles.filter(
        (article) => article.status === 'Fake News'
    ).length;

    const reportCards = [
        {
            title: 'Total Articles',
            count: totalArticles,
            icon: FileText,
            color: 'bg-blue-100 text-blue-700'
        },
        {
            title: 'Pending',
            count: pendingArticles,
            icon: Clock,
            color: 'bg-yellow-100 text-yellow-700'
        },
        {
            title: 'Verified',
            count: verifiedArticles,
            icon: CheckCircle,
            color: 'bg-green-100 text-green-700'
        },
        {
            title: 'Fake News',
            count: fakeArticles,
            icon: ShieldAlert,
            color: 'bg-red-100 text-red-700'
        }
    ];

    return (
        <main className="flex-1 min-w-0 min-h-screen p-4 md:p-8 bg-background text-foreground">

            <h1 className="text-2xl font-bold">
                Reports & Analytics
            </h1>

            <p className="text-muted-foreground mt-2 mb-8">
                View misinformation detection reports and statistics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {reportCards.map((report) => {

                    const Icon = report.icon;

                    return (
                        <div
                            key={report.title}
                            className="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-sm"
                        >

                            <div className="flex justify-between items-center">

                                <h2 className="text-muted-foreground font-medium">
                                    {report.title}
                                </h2>

                                <div className={`p-3 rounded-lg ${report.color}`}>
                                    <Icon size={22} />
                                </div>

                            </div>

                            <p className="text-3xl font-bold mt-4">
                                {report.count}
                            </p>

                        </div>
                    );
                })}

            </div>

            <div className="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-sm mt-8">

                <h2 className="text-xl font-semibold mb-4">
                    Verification Summary
                </h2>

                <p className="text-muted-foreground">
                    You have submitted <strong className="text-foreground">{totalArticles}</strong> articles so far.
                </p>

                <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">{pendingArticles}</strong> articles are waiting for verification.
                </p>

                <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">{verifiedArticles}</strong> articles have been verified.
                </p>

                <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">{fakeArticles}</strong> articles have been marked as fake news.
                </p>

            </div>

        </main>
    );
}

export default Reports;
