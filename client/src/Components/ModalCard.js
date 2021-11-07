import React from 'react';
import AddSVG from '../Images/AddSVG';
import FoodCard from '../Components/FoodCard';
const ModalCard = ({ title, color, cb }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [awardedPoints, setAwardedPts] = React.useState(0);
    const [rewardtitle, setRewardTitle] = React.useState('');

    return (
        <>
            <div
                className={`grid grid-cols-3 py-6 my-4 mx-2 rounded-xl divide-x-2 bg-${color} h-100`}
                onClick={() => setShowModal(true)}
            >
                <div className="col-span-2 grid grid-cols-1 gap-3 py-2 test-center">
                    <div className="text-center text-white text-xl font-bold">{title}</div>
                </div>
                <div className="grid grid-cols-1 text-white py-2 justify-items-center ">
                    <div className="flex " />
                    <div className="flex ">
                        <AddSVG width={50} height={50} />
                    </div>
                    <div className="flex " />
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-darkPurple outline-white focus:outline-none"
                                onSubmit={(e) => { e.preventDefault(); cb(awardedPoints, rewardtitle) }}
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-white">
                                        New Reward!
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {/* CONTENT HERE */}
                                    <div className="flex flex-col py-3 gap-1">
                                        <label htmlFor="username" className="text-white text-xl">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="text-lightGreen bg-transparent border-b text-xl"
                                            onChange={(e) => setRewardTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col py-3 gap-1">
                                        <label htmlFor="username" className="text-white text-xl py-2">
                                            Points Cost
                                        </label>
                                        <div className="flex items-center justify-center mb-4">
                                            <button
                                                className="text-purple-500 bg-transparent border-l border-t border-b border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAwardedPts(5)}>
                                                5
                                            </button>
                                            <button
                                                className="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAwardedPts(10)}>
                                                10
                                            </button>
                                            <button
                                                className="text-purple-500 bg-transparent border-t border-b border-r border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAwardedPts(15)}>
                                                15
                                            </button>
                                            <button
                                                className="text-purple-500 bg-transparent border-t border-b border-r border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAwardedPts(20)}>
                                                20
                                            </button>
                                            <button
                                                className="text-purple-500 bg-transparent border-t border-b border-r border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAwardedPts(25)}>
                                                25
                                            </button>
                                            <button
                                                className="text-purple-500 bg-transparent border-t border-b border-r border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setAwardedPts(30)}>
                                                30
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>);
};

export default ModalCard;
