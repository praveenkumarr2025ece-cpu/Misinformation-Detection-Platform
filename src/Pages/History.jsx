
import { useState } from 'react';
import { Search } from 'lucide-react';

function History() {

    const [articles, setArticles] = useState(() => {
        return JSON.parse(localStorage.getItem('articles') || '[]');
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    function updateStatus(id, newStatus) {

        const article = articles.find((item) => item.id === id);

        if (!article || article.status === newStatus) {
            return;
        }

        const updatedArticles = articles.map((item) =>
            item.id === id
                ? { ...item, status: newStatus }
                : item
        );

        setArticles(updatedArticles);

        localStorage.setItem(
            'articles',
            JSON.stringify(updatedArticles)
        );

        // Read existing notification records
        const notifications = JSON.parse(
            localStorage.getItem('truthLensNotifications') || '[]'
        );

        // Create a status notification
        const newNotification = {
            id: Date.now(),
            message: `Article marked as ${newStatus}`,
            articleTitle: article.title,
            type: 'status',
            createdAt: new Date().toLocaleString(),
            read: false
        };

        localStorage.setItem(
            'truthLensNotifications',
            JSON.stringify([newNotification, ...notifications])
        );

        // Update Navbar
        window.dispatchEvent(new Event('notificationsUpdated'));
    }

    function getStatusColor(status) {

        if (status === 'Verified') {
            return 'bg-green-100 text-green-700';
        }

        if (status === 'Fake News') {
            return 'bg-red-100 text-red-700';
        }

        return 'bg-yellow-100 text-yellow-700';
    }

    const filteredArticles = articles.filter((article) => {

        const matchesSearch = article.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesStatus =
            filterStatus === 'All' ||
            article.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    return (
        <main className="flex-1 min-w-0 min-h-screen p-4 md:p-8 bg-background text-foreground">

            <h1 className="text-2xl font-bold">
                Verification History
            </h1>

            <p className="text-muted-foreground mt-2 mb-8">
                Search, filter and manage submitted news articles.
            </p>

            <div className="bg-card p-5 rounded-xl border border-border mb-6">

                <h2 className="text-muted-foreground font-medium">
                    Total Submitted Articles
                </h2>

                <p className="text-3xl font-bold mt-2">
                    {articles.length}
                </p>

            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">

                <div className="relative flex-1">

                    <Search
                        size={20}
                        className="absolute left-3 top-3 text-muted-foreground"
                    />

                    <input
                        type="text"
                        placeholder="Search articles by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="border border-input bg-background text-foreground rounded-lg px-4 py-3"
                >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Verified">Verified</option>
                    <option value="Fake News">Fake News</option>
                </select>

            </div>

            <div className="bg-card rounded-xl border border-border p-6">

                <h2 className="text-xl font-semibold mb-5">
                    Article History ({filteredArticles.length})
                </h2>

                {filteredArticles.length === 0 ? (

                    <p className="text-muted-foreground text-center py-8">
                        No matching articles found.
                    </p>

                ) : (

                    <div className="space-y-5">

                        {filteredArticles.map((article) => (

                            <div
                                key={article.id}
                                className="border border-border rounded-lg p-5"
                            >

                                <div className="flex justify-between items-start gap-3">

                                    <h3 className="font-semibold">
                                        {article.title}
                                    </h3>

                                    <span className={`px-3 py-1 rounded-full text-sm font-medium shrink-0 ${getStatusColor(article.status)}`}>
                                        {article.status}
                                    </span>

                                </div>

                                <p className="text-muted-foreground text-sm mt-3">
                                    {article.content}
                                </p>

                                <a
                                    href={article.source}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 dark:text-blue-400 text-sm mt-3 block break-all"
                                >
                                    {article.source}
                                </a>

                                <p className="text-xs text-muted-foreground mt-3">
                                    Submitted: {article.submittedAt}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-5">

                                    <button
                                        onClick={() => updateStatus(article.id, 'Verified')}
                                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                    >
                                        Mark Verified
                                    </button>

                                    <button
                                        onClick={() => updateStatus(article.id, 'Fake News')}
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                    >
                                        Mark Fake News
                                    </button>

                                    <button
                                        onClick={() => updateStatus(article.id, 'Pending')}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                                    >
                                        Mark Pending
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
}

export default History;
