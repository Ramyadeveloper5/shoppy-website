import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { FaGift } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaChevronRight } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { BsShopWindow } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from 'axios';

const UserProfile = () => {

    const [UseName, SetUseName] = useState("");

    const navigation = useNavigate()
    const getUser = async () => {
        const token = localStorage.getItem("Token");
        console.log(token);

        let config = {
            headers: {
                authorization: "Bearer " + token,
            },
        };
        console.log(config, "config");
        await axios.get("http://localhost:5000/verifyauth", config).then((res) => {
            console.log(res.data.name, "profile");
            SetUseName(res.data.name);
        });
    };

    useEffect(() => {
        getUser();

    }, []);



    const handleLogout = () => {
        // Clear local storage
        localStorage.removeItem('Token');

        // Redirect to home page

        navigation("/")
        // Reload the page
        window.location.reload();
    };

    return (
        <div className=" w-full my-9 ">
            <div className=" w-full md:w-5/6 md:m-auto lg:w-5/6 lg:m-auto flex justify-between px-2 ">
                <div className=" flex items-center gap-1 capitalize font-body text-sm md:text-sm lg:text-sm ">
                    <Link to={"/home"}>
                        <p className=" cursor-pointer">home</p>
                    </Link>
                    <MdKeyboardArrowRight />
                    <Link to={"/user"}>
                        <p className=" cursor-pointer">my account</p>
                    </Link>
                    <MdKeyboardArrowRight />
                </div>
                <div>
                    <h2 className=" capitalize font-body text-lg">
                        hey!<span className=" text-red-500">{UseName}</span>
                    </h2>
                </div>
            </div>
            <div className=" md:hidden lg:hidden">
                <div className=" w-10/12 m-auto my-3 grid place-content-center grid-cols-2 gap-2 px-3 py-3">
                    <div className=" w-full border border-slate-500 rounded-md flex justify-between items-center py-2 px-2">
                        <Link to={"/wishlist"}>
                            <p className=" capitalize font-body text-lg">wishlist</p>
                        </Link>
                        <Link to={"/wishlist"}>
                            <FaRegHeart className=" w-5 h-5 text-red-500" />
                        </Link>
                    </div>
                    <div className=" w-full border border-slate-500 rounded-md flex justify-between items-center py-2 px-2">
                        <Link to={"/myorders"}>
                            <p className=" capitalize font-body text-lg">orders</p>
                        </Link>
                        <Link to={"/myorders"}>
                            <LuPackage className=" w-5 h-5 text-red-500" />
                        </Link>
                    </div>
                    <div className=" w-full border border-slate-500 rounded-md flex justify-between items-center py-2 px-2">
                        <Link to={"/contact"}>
                            <p className=" capitalize font-body text-lg">help center</p>
                        </Link>
                        <Link to={"/contact"}>
                            <TfiHeadphoneAlt className=" w-5 h-5 text-red-500" />
                        </Link>
                    </div>
                    <div className=" w-full border border-slate-500 rounded-md flex justify-between items-center py-2 px-2">
                        <Link>
                            <p className=" capitalize font-body text-lg">coupons</p>
                        </Link>
                        <Link>
                            <FaGift className=" w-5 h-5 text-red-500" />
                        </Link>
                    </div>
                </div>
                <div className=" w-full px-3  ">
                    <h2 className=" capitalize  font-body text-2xl font-medium cursor-default">account settings</h2>
                    <div className=" w-full grid gap-5 py-2">
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <Link to={'/editprofile'}>
                                    <p className=" capitalize font-body text-xl cursor-pointer">edit profile</p>
                                </Link>
                            </div>
                            <Link to={'/editprofile'}>
                                <FaUserEdit className=" w-7 h-7 text-red-500" />
                            </Link>
                        </div>
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <Link to={'/editprofile'}>
                                    <p className=" capitalize font-body text-xl cursor-pointer">save cards & wallets</p>
                                </Link>
                            </div>
                            <Link to={'/editprofile'}>
                                <FaWallet className=" w-7 h-7 text-red-500" />
                            </Link>
                        </div>
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <Link to={'/editprofile'}>
                                    <p className=" capitalize font-body text-xl cursor-pointer">saved address</p>
                                </Link>
                            </div>
                            <Link to={'/editprofile'}>
                                <FaLocationDot className=" w-7 h-7 text-red-500" />
                            </Link>
                        </div>
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <Link to={'/editprofile'}>
                                    <p className=" capitalize font-body text-xl cursor-pointer">select language</p>
                                </Link>
                            </div>
                            <Link to={'/editprofile'}>
                                <GrLanguage className=" w-7 h-7 text-red-500" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" w-full px-3 py-3 ">
                    <h2 className=" capitalize  font-body text-2xl font-medium cursor-default">my activity</h2>
                    <div className=" w-full grid gap-5 py-2">
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <p className=" capitalize font-body text-xl cursor-pointer">reviwes</p>
                            </div>
                            <FaRegEdit className=" w-7 h-7 text-red-500" />
                        </div>
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <p className=" capitalize font-body text-xl cursor-pointer">questions & answers</p>
                            </div>
                            <IoMdChatbubbles className=" w-7 h-7 text-red-500" />
                        </div>
                        <div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1">
                                <FaChevronRight />
                                <p className=" capitalize font-body text-xl cursor-pointer">sell on gadget world</p>
                            </div>
                            <BsShopWindow className=" w-7 h-7 text-red-500" />
                        </div>
                        {localStorage.getItem("Token") ? (<div className=" w-full flex justify-between ">
                            <div className=" w-2/3 flex items-center gap-1 cursor-pointer" onClick={handleLogout}>
                                <FaChevronRight />
                                <p className=" capitalize font-body text-xl cursor-pointer" >Logout</p>
                            </div>
                            <RiLogoutCircleRFill className=" w-7 h-7 text-red-500" />
                        </div>) : (<div></div>)}
                    </div>
                </div>
            </div>
            <div className="hidden  md:w-5/6 md:m-auto md:flex px-2 py-5">
                <div className=" w-1/4 " >
                    <div className=" w-full ">
                        <h2 className=" capitalize font-body text-lg font-semibold cursor-pointer">My account</h2>
                        <div className=" w-5/6 m-auto grid gap-2 py-4">
                            <Link>
                                <p className=" capitalize font-body text-sm text-gray-400 hover:text-red-500">My profile</p>
                            </Link>
                            <Link>
                                <p className=" capitalize font-body text-sm text-gray-400 hover:text-red-500">Address book</p>
                            </Link>
                            <Link>
                                <p className=" capitalize font-body text-sm text-gray-400 hover:text-red-500">My payment option</p>
                            </Link>
                        </div>
                    </div>
                    <div className=" w-full ">
                        <h2 className=" capitalize font-body text-lg font-semibold cursor-pointer">My orders</h2>
                        <div className=" w-5/6 m-auto grid gap-2 py-4">
                            <Link>
                                <p className=" capitalize font-body text-sm text-gray-400 hover:text-red-500">My returns</p>
                            </Link>
                            <Link>
                                <p className=" capitalize font-body text-sm text-gray-400 hover:text-red-500">My cancellations</p>
                            </Link>

                        </div>
                    </div>
                    <div>
                        <Link to={'/wishlist'}>
                            <h2 className=" capitalize font-body font-semibold text-lg" >my wishlist</h2>
                        </Link>
                    </div>
                    {localStorage.getItem("Token") ? (<div>
                        <div className="flex items-center gap-2 cursor-pointer mt-4" onClick={handleLogout}>
                            <h2 className=" capitalize font-body font-semibold text-lg">LogOut</h2>
                            <RiLogoutCircleRFill />
                        </div>
                    </div>) : (<div></div>)}

                </div>
                <div className=" w-3/5 m-auto  px-10 py-4 shadow-lg ">
                    <h2 className=" w-full font-body capitalize text-xl text-left text-red-500">edit your profile</h2>
                    <div className=" grid gap-3 py-3">
                        <div className=" flex justify-between ">
                            <div className=" w-full grid gap-1">
                                <label className=" capitalize font-body ">first name</label>
                                <input type=" text" placeholder=" Monkey.D." className=" w-11/12 px-2 py-2 bg-slate-100" />
                            </div>
                            <div className=" w-full grid gap-1">
                                <label className=" capitalize font-body ">last name</label>
                                <input type=" text" placeholder="Luffy" className=" w-full px-2 py-2 bg-slate-100" />
                            </div>
                        </div>
                        <div className=" flex justify-between ">
                            <div className=" w-full grid gap-1">
                                <label className=" capitalize font-body ">email</label>
                                <input type=" text" placeholder=" luffypirate1998@gmail.com" className=" w-11/12 px-2 py-2 bg-slate-100" />
                            </div>
                            <div className=" w-full grid gap-1">
                                <label className=" capitalize font-body ">address</label>
                                <input type=" text" placeholder="No.7,Strawhat Pirates,One Piece" className=" w-full px-2 py-2 bg-slate-100" />
                            </div>
                        </div>
                        <div className=" w-full">
                            <label className=" capitalize font-body">password changes</label>
                            <div className=" w-full grid gap-3 py-3">
                                <input type=" password" placeholder=" Current Password" className=" px-2 py-2 w-full bg-slate-100 " />
                                <input type=" password" placeholder=" New Password" className=" px-2 py-2 w-full bg-slate-100 " />
                                <input type=" password" placeholder=" Confirm Password" className=" px-2 py-2 w-full bg-slate-100 " />
                            </div>
                        </div>
                        <div className=" w-full flex justify-end gap-2">
                            <Link>
                                <button className=" capitalize font-body px-2 py-2 hover:bg-red-500 hover:text-white">cancel</button>
                            </Link>
                            <Link>
                                <button className=" capitalize font-body px-2 py-2 bg-red-500 text-white">save changes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserProfile
