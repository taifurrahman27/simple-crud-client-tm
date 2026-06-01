import React from 'react';

const UserDetails = ({ user }) => {

    return (
        <div className="min-h-screen bg-[#070B14] flex items-center justify-center px-4">

            <div className="relative w-full max-w-md">

                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-3xl blur-xl opacity-20"></div>

                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <h2 className="text-3xl font-bold text-white">
                            {user.name}
                        </h2>

                        <span className="inline-block mt-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                            {user.role}
                        </span>
                    </div>

                    <div className="my-6 border-t border-white/10"></div>

                    <div className="space-y-4">

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                                Full Name
                            </p>

                            <p className="text-white font-medium">
                                {user.name}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                                Email Address
                            </p>

                            <p className="text-white font-medium break-all">
                                {user.email}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                                User Role
                            </p>

                            <p className="text-cyan-400 font-semibold">
                                {user.role}
                            </p>
                        </div>

                    </div>

                    <button className="w-full mt-8 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/20">
                        Edit User
                    </button>

                </div>

            </div>

        </div>
    );
};

export default UserDetails;
