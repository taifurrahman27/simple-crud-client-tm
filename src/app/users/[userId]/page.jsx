import { getUserById } from "@/app/lib/data";
import UserDetails from "@/components/UserDetails";

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070B14]">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 py-6">

                <div className="mb-5">
                    <span className="text-sm text-slate-500">
                        Dashboard / Users /
                    </span>

                    <span className="text-blue-400 text-sm font-medium ml-2">
                        {user.name}
                    </span>
                </div>

                <div className="mb-2">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                        User Profile
                    </div>

                    <h1 className="mt-4 text-4xl md:text-6xl font-black text-white">
                        User
                        <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent ml-3">
                            Details
                        </span>
                    </h1>

                    <p className="mt-4 text-slate-400 max-w-2xl">
                        View complete information, account details, and role
                        permissions for this user in your system.
                    </p>

                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/3 backdrop-blur-3xl px-6 md:px-10 shadow-[0_0_60px_rgba(59,130,246,0.08)]">

                    <UserDetails user={user} />

                </div>

            </div>

        </section>
    );
};

export default UserDetailsPage;