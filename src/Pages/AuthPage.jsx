
import { useState } from 'react';
import Login from '../Auth/Login';
import SignUp from './SignUp';

function AuthPage() {

    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">

                <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
                    TruthLens
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Verify information. Discover the truth.
                </p>

                <div className="flex border-b mb-6">

                    <button
                        onClick={() => setActiveTab('login')}
                        className={`w-1/2 py-3 font-semibold ${
                            activeTab === 'login'
                                ? 'text-blue-700 border-b-2 border-blue-700'
                                : 'text-gray-500'
                        }`}
                    >
                        Login
                    </button>

                    <button
                        onClick={() => setActiveTab('signup')}
                        className={`w-1/2 py-3 font-semibold ${
                            activeTab === 'signup'
                                ? 'text-blue-700 border-b-2 border-blue-700'
                                : 'text-gray-500'
                        }`}
                    >
                        Sign Up
                    </button>

                </div>

                {activeTab === 'login' ? <Login /> : <SignUp />}

            </div>
        </div>
    );
}

export default AuthPage;
