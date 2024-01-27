import { Footer } from "flowbite-react"
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsDribbble, BsLinkedin} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-4 border-green-500">
        <div className="w-full max-w-7xl mx-auto">
             <div className="grid w-full justify-between md:grid-cols-1 sm:flex">
                    <div className="mt-5">
                        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                           <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-indigo-500 rounded-md text-white">MERN</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                         <div>
                            <Footer.Title title='About'/>
                            <Footer.LinkGroup col>
                                 <Footer.Link 
                                    href="http://top20jsprojects.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                      Top 20 js projects
                                 </Footer.Link>
                                 <Footer.Link
                                   href="/projects"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                 >
                                  Vamsi's Blog
                                 </Footer.Link>
                            </Footer.LinkGroup>
                         </div>
                         <div>
                            <Footer.Title title='Follow Us'/>
                            <Footer.LinkGroup col>
                                 <Footer.Link 
                                    href="http://github.com/Vamsikrishna9432"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                      Github
                                 </Footer.Link>
                                 <Footer.Link
                                   href="#"
                                 >
                                  Discord
                                 </Footer.Link>
                            </Footer.LinkGroup>
                         </div>
                         <div>
                            <Footer.Title title='Legal'/>
                            <Footer.LinkGroup col>
                                 <Footer.Link 
                                    href="#"
                                 >
                                     Terms and conditions
                                 </Footer.Link>
                                 <Footer.Link
                                   href="#"
                                 >
                                  Privacy Policy
                                 </Footer.Link>
                            </Footer.LinkGroup>
                         </div>
                    </div>
             </div>
             <Footer.Divider />
             <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright by='vamsikrishna' year={new Date().getFullYear()}/>
                <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook}/>
                    <Footer.Icon href="#" icon={BsInstagram}/>
                    <Footer.Icon href="#" icon={BsTwitter}/>
                    <Footer.Icon href="https://www.linkedin.com/in/vamsikrishnaummadi/" target='_blank' rel="noopener noreferrer" icon={BsLinkedin}/>
                    <Footer.Icon href="#" icon={BsDribbble}/>
                </div>
             </div>
        </div>
    </Footer>
  )
}

export default FooterCom;