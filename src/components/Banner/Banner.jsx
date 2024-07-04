import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import img from "../../assets/my_formal_photo-no-bg.png";
import {
  FaCalendarAlt,
  FaFacebook,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
        <div className="md:col-span-1 rounded-md relative">
          <img className="w-full rounded-full border-8" src={img} alt="banner image" />
          <div className="bg-white mt-10 w-2/3 h-10 rounded-3xl p-2 absolute bottom-3 ml-8 flex justify-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=100028344363466&mibextid=ZbWKwL">
              <FaFacebook className="text-gray-600 text-xl" />
            </a>
            <a className="text-xl text-slate-600">
              <FaTwitter />
            </a>
            <a href="https://github.com/ahsan200t">
            <FaGithubSquare className="text-xl text-black" />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-amimul-ehsan">
            <FaLinkedin className="text-xl text-blue-600"/>
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="text-2xl mb-4 font-semibold">Hello Everyone 👋</h4>
          <h1 className="text-4xl font-semibold">
            I`m MOHAMMAD AMIMUL EHSAN <br />I am a front-end Web developer.|
          </h1>
          <div className="text-center">
          <Link to='/projects'>
           <button className="btn mt-10 btn-outline text-secondary mx-auto">View Projects</button>
           </Link>
          </div>
          <div className="mt-10 md:flex items-center justify-around">
            <div>
              <div className="flex items-center gap-4">
                <FaCalendarAlt />
                <p>01.02.2002</p>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <MdEmail />
                <p>ahsanpekua200@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <MdOutlineWhatsapp />
                <p>01884254200</p>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <FaLocationDot />
                <p>Pekua, Cox`s Bazar,Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
