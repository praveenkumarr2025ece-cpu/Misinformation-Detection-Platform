
import { useState } from 'react';

function VerifyNews() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [source, setSource] = useState('');
    const [message, setMessage] = useState('');

    const [articles, setArticles] = useState(() => {
        return JSON.parse(localStorage.getItem('articles') || '[]');
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim() || !content.trim() || !source.trim()) {
            setMessage('Please fill in all fields.');
            return;
        }

        const newArticle = {
            id: Date.now(),
            title: title.trim(),
            content: content.trim(),
            source: source.trim(),
            status: 'Pending',
            submittedAt: new Date().toLocaleString()
        };

        const updatedArticles = [...articles, newArticle];

        localStorage.setItem(
            'articles',
            JSON.stringify(updatedArticles)
        );

        setArticles(updatedArticles);

        // Save a new notification
        const notifications = JSON.parse(
            localStorage.getItem('truthLensNotifications') || '[]'
        );

        const newNotification = {
            id: Date.now(),
            message: 'New article submitted',
            articleTitle: newArticle.title,
            type: 'submission',
            createdAt: new Date().toLocaleString(),
            read: false
        };

        localStorage.setItem(
            'truthLensNotifications',
            JSON.stringify([newNotification, ...notifications])
        );

        // Notify Navbar
        window.dispatchEvent(new Event('notificationsUpdated'));

        setMessage('Article submitted successfully!');

        setTitle('');
        setContent('');
        setSource('');
    }

    return (
        <main className="flex-1 min-w-0 min-h-screen p-4 md:p-8 bg-background text-foreground">

            <h1 className="text-2xl font-bold mb-2">
                Verify News
            </h1>

            <p className="text-muted-foreground mb-8">
                Submit a news article to check its authenticity.
            </p>

            <div className="max-w-3xl bg-card text-card-foreground p-6 rounded-xl shadow-sm border border-border">

                <h2 className="text-xl font-semibold mb-6">
                    Article Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block font-medium mb-2">
                            Article Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter news title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-input bg-background text-foreground rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-muted-foreground"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            News Content
                        </label>

                        <textarea
                            placeholder="Paste the news article or claim here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows="6"
                            className="w-full border border-input bg-background text-foreground rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-muted-foreground"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Source URL
                        </label>

                        <input
                            type="url"
                            placeholder="https://example.com/news"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                            className="w-full border border-input bg-background text-foreground rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-muted-foreground"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Submit for Verification
                    </button>

                    {message && (
                        <p className="text-center text-sm font-medium text-blue-600 dark:text-blue-400">
                            {message}
                        </p>
                    )}

                </form>

            </div>

            <div className="max-w-3xl mt-8">

                <h2 className="text-xl font-bold mb-4">
                    Submitted Articles ({articles.length})
                </h2>

                {articles.length === 0 ? (

                    <p className="text-muted-foreground bg-card p-5 rounded-xl border border-border">
                        No articles submitted yet.
                    </p>

                ) : (

                    <div className="space-y-4">

                        {articles.map((article) => (

                            <div
                                key={article.id}
                                className="bg-card text-card-foreground p-5 rounded-xl shadow-sm border border-border"
                            >

                                <div className="flex justify-between items-start gap-3">

                                    <h3 className="font-semibold">
                                        {article.title}
                                    </h3>

                                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm shrink-0">
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
                                    className="text-blue-600 dark:text-blue-400 text-sm mt-3 inline-block break-all"
                                >
                                    {article.source}
                                </a>

                                <p className="text-xs text-muted-foreground mt-3">
                                    Submitted: {article.submittedAt}
                                </p>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
}

export default VerifyNews;
