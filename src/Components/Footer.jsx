import xLogo from "../assets/x.svg";
import gitLogo from "../assets/github.svg"
import linkedinLogo from "../assets/linkedin.svg"
function Footer(){
    return(
        <div className="footer w-full h-24 py-0 px-0 flex flex-col justify-center items-center  gap-2 text-black bg-slate-100">
            <h3>Made with ❤️ by Omkar</h3>
            <div className="media-links flex flex-row gap-2">
                <a href="https://x.com/imomkarpanda"><img src={xLogo} alt="X(twitter)" className="w-6 h-6"/></a>
                <a href="https://github.com/iomkarpanda"><img src={gitLogo} alt="Github" className="w-6 h-6"/></a>
                <a href="https://x.com/imomkarpanda"><img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6"/></a>
            </div>
        </div>
    )
}


export default Footer;