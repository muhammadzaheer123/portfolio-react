import React from 'react'
import '../layouts/Header.css'
import { Link } from 'react-router-dom'
import { IMAGESHUB, app, design, graphic, imagedomore, web, web2, webdesign, webdevelop, word } from '../../assests/utils/images.'


const Header = () => {
    return (
        <>

            {/* navbar start */}

            <div className="main">
                <div className="main-nav">
                    <div className="logo">
                        <h1>Zeeru Tech</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Services">Services</Link>
                            </li>
                            <li>
                                <Link to="/About">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* navbar end */}

                {/* hero section start */}

                <div className="main-hero">
                    <div className="hero-sec">
                        <h1 className='fisrt-para'>Hello! It's Me <span className='span-first'>Muhammad Zaheer</span></h1>
                        <h1 className='second-para'>I Am A Full Stack <span className='span-sec'>Developer</span></h1>
                        <p className='main-para'>
                            A Full Stack Developer is a versatile professional proficient in both front-end and back-end development. They are adept at creating user-friendly interfaces using HTML, CSS, and JavaScript, ensuring the visual aspects of a web application are engaging and intuitive. </p>
                        <div className="btn-heroo">
                            <button className='hero-btn'>More About Me</button>
                            <button className='hero-btn-02'>Hire Me</button>
                        </div>

                    </div>
                    <div className="image-hero">
                        <img src={IMAGESHUB.hero} alt="" />
                    </div>
                </div>
            </div>
            <div className="UIUX">
                <img src={IMAGESHUB.UIUX} alt="" />
                <div className="UIUX-logos">
                    <h1>UI/UX</h1>
                    <p>Best Award By Developer ...</p>
                </div>
            </div>

            {/* hero section end */}

            <div className="second-hero-sec">
                <h1>
                    WE SERVE CREATIVITY AND QUALITY</h1>
                <p>
                    With more than 10 years of expertise, we are aware of the business demands and brand-building tactics of today. We combine a creative thinking with excellent designs, clever marketing techniques, and cutting-edge technology to support you whether you're trying to launch a cutthroat company or refresh an established brand.</p>
            </div>

            <div className="third-section">
                <img src={IMAGESHUB.mercury} alt="" />
                <p>Lorem Lorem ipsum dolor sit, amet  adipisicing elit. Accusantium minima vitae sajyudydu jkdhyyud myhiwduyws juysd897udwnmn uid nmdjyquij  esse enim? Esse natus temporibus quasi itaque, est non ipsum error eveniet et dignissimos architecto cumque asperiores eaque quod debitis consequatur aperiam aut possimus? Earum sint mollitia, id, quasi sed voluptatem delectus sit at similique amet quaerat harum pariatur, adipisci repellendus eius voluptates eveniet ipsam nemo. Necessitatibus ipsa adipisci rem iusto dolores officia eum explicabo. Aliquid omnis minima recusandae eaque, sint impedit similique dicta esse doloremque rem neque perferendis ducimus eveniet autem accusantium deserunt, consequatur ex sequi. Eius maiores est provident perspiciatis odio eos optio, itaque harum libero? Quos ut aspernatur suscipit eligendi dicta sequi ducimus. Ipsa molestiae aperiam recusandae itaque veniam, ullam harum perspiciatis eum nam velit eius eligendi error quo voluptatem illum, dolorum cum sequi minus quia dolores rerum. Quaerat veritatis, minima hic omnis maiores harum, sint quam ratione eum beatae ipsum asperiores blanditiis consectetur eligendi impedit odio labore aliquam quidem, voluptatibus est voluptas quibusdam? Harum debitis optio ut impedit saepe ducimus quaerat cumque reiciendis ipsum quia velit vel blanditiis labore cum atque voluptas illo aliquid iusto, veritatis vero, odit numquam! Rerum veniam quidem doloremque nam quo maxime, iure est. Dolorum pariatur ab assumenda eaque consectetur culpa, temporibus ducimus dicta laudantium, autem veniam? ipsum, dolor sit amet consectetur adipisicing elit. Sequi qui nobis ipsam possimus, libero minima eaque quo sed sapiente, harum explicabo, corporis magni officia minus fuga cumque totam! Praesentium, error libero. Reiciendis omnis, aliquid officiis velit ducimus possimus? Perspiciatis ipsum blanditiis debitis amet sit. Atque asperiores molestiae iure hic distinctio dicta. Suscipit aperiam enim iusto. Iusto ea repudiandae maxime quos eius reiciendis? Labore ab nam ipsam corrupti, praesentium deserunt fugit saepe dolores repellat odio impedit, commodi voluptate doloremque rem! Laboriosam velit numquam expedita laborum eum libero deleniti fugit, hic quos perspiciatis temporibus cupiditate optio non ducimus quod eos ipsa sit quo totam omnis aliquam. Asperiores earum facilis, unde sequi doloremque porro vero architecto molestias vitae harum quos aspernatur! Earum, voluptatibus!</p>
            </div>
            <div className="btn-third-sec">
                <button><span>Learn More</span></button>
            </div>


            {/* service section start */}

            <div className="main-services">
                <div className="logoss">
                    <h1>Our <span className='service'>Services</span></h1>
                    <p>Which We Provide</p>
                    <p className='service-para-01'>
                        With our skilled and experienced team, we offer wide range of IT services. Please have a look at our services which provides you complete IT solution.</p>
                </div>
                <div className="first-service">
                    <div className="service-01">
                        <img className='service-img' src={IMAGESHUB.design} alt="" />
                        <h2><span className='logo-service-01'>Graphic</span> <span className='logo-service'>Design</span></h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, vero harum laborum facilis necessitatibus illum distinctio perspiciatis nam earum officiis suscipit facere? Aliquam et nisi commodi illo architecto fugiat odit beatae. Aperiam laboriosam dicta illo error vero aliquid atque numquam exercitationem eveniet dolorum, harum, ipsa blanditiis fugit expedita facere enim.</p>
                        <button className='Service-btn'>Learn More</button>
                    </div>
                    <div className="service-01">
                        <img className='service-img' src={IMAGESHUB.development} alt="" />
                        <h2><span className='logo-service-01'>Web</span> <span className='logo-service'>Development</span></h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, blanditiis rem fugiat consequuntur alias cupiditate quis quia temporibus, iste ex illum! Veritatis, facere unde labore voluptatem quis doloremque optio, eius illum voluptate aspernatur nihil distinctio veniam quam! Quisquam expedita labore eum perspiciatis fugit non architecto enim, eos, magni illum quasi.</p>
                        <button className='Service-btn'>Learn More</button>
                    </div>
                    <div className="service-01">
                        <img className='service-img' src={IMAGESHUB.press} alt="" />
                        <h2><span className='logo-service-01'>Word</span> <span className='logo-service'>Press</span></h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellat ut adipisci commodi perferendis numquam dignissimos dolores est ipsum libero deleniti, tempora saepe maxime possimus aspernatur, iure molestiae laudantium necessitatibus voluptas iste. Quaerat ducimus laudantium iste quas ullam quibusdam corporis blanditiis fugit ipsa maxime? Aliquam officiis sint deleniti culpa atque.</p>
                        <button className='Service-btn'>Learn More</button>
                    </div>
                </div>
                <div className="sec-service">
                    <div className="service-01">
                        <img className='service-img' src={IMAGESHUB.webdesign} alt="" />
                        <h2><span className='logo-service-01'>Word</span> <span className='logo-service'>Design</span></h2>
                        <p>Lorem ipsum dolor sit amet jskuywdu  consectetur adipisicing elit. Laborum tempora laudantium cupiditate exercitationem debitis, ratione dolores culpa consequatur eaque sint? Architecto libero illo non iusto ipsum similique quasi quod quos, tempore, accusantium suscipit distinctio doloremque qui nihil! Beatae, quod libero mollitia debitis voluptatem, illo doloribus assumenda quas, quos veniam optio.</p>
                        <button className='Service-btn'>Learn More</button>
                    </div>
                    <div className="service-01">
                        <img className='service-img' src={IMAGESHUB.appdevelopment} alt="" />
                        <h2><span className='logo-service-01'>App</span> <span className='logo-service'>Development</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero magnam magni ad, natus optio eligendi! Esse alias facere sint, quam reiciendis harum repudiandae commodi earum deleniti saepe laudantium, at id autem, accusantium quia! Laborum nihil natus iste nisi enim. Ullam quod harum explicabo vero eligendi odio modi ad dolorum.</p>
                        <button className='Service-btn'>Learn More</button>
                    </div>
                </div>
            </div>



            {/* service section end  */}
        </>
    )
}

export default Header
