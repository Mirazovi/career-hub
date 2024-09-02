

const Footer = () => {
    return (
        <div className="bg-black text-white py-20">
            <div className="grid grid-cols-6 gap-10 w-[90%] m-auto py-3">
                <div className="col-span-2">
                    <h1 className="text-2xl font-bold">CareerHub</h1>
                    <p className="text-xl py-2">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Company</p>
                    <p>About</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Product</p>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <p className="text-xl font-bold">Support</p>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-bold">Contact</p>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className="w-[90%] m-auto">
                <hr />
                <div className="flex justify-between items-center py-2 ">
                    <h1>@2023 CareerHub. All Rights Reserved</h1>
                    <p>Powered by CareerHub</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;