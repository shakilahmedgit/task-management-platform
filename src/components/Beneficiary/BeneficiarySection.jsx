
const BeneficiarySection = () => {
    return (
        <section className="px-5 lg:px-10 xl:px-20 py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Who Benefits from Our Platform?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="beneficiary-card rounded-lg bg-white p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Developers</h3>
                        <p className="text-gray-700">Empower your workflow with our intuitive task management platform. Organize your tasks effortlessly and boost productivity.</p>
                    </div>
                    <div className="beneficiary-card rounded-lg bg-white p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
                        <p className="text-gray-700">Streamline your project management. Collaborate, assign tasks, and track progress seamlessly to achieve business goals efficiently.</p>
                    </div>
                    <div className="beneficiary-card rounded-lg bg-white p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Bankers</h3>
                        <p className="text-gray-700">Manage financial tasks with ease. Keep track of transactions, deadlines, and financial milestones effortlessly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeneficiarySection;
