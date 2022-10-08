import React from 'react';
import "./App.css";
import aboutimg from "./img/img.jpg";
import aboutimg2 from "./img/img2.jpg";
import aboutimg3 from "./img/img3.jpg";
import aboutimg4 from "./img/img4.jpg";
import aboutimg5 from "./img/img5.jpg";
import aboutimg6 from "./img/img6.jpg";

const App = () => {
  return (
    <>
        <div className="f_banner">
            <div className="f_banner_Details">
                <h1>Central Coffee</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        {/* end of f_banner */}


        <div className="about">
            <div className="about_Section">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos quasi et non cupiditate deleniti hic dolor neque, veritatis praesentium reprehenderit quibusdam consectetur aliquam eos mollitia delectus quia. Amet eligendi mollitia nulla placeat? Doloremque consequuntur blanditiis exercitationem maxime ea corporis dignissimos, nisi possimus beatae repellendus? Earum explicabo quae maiores? Eligendi provident vero nam aperiam magnam odit voluptas ea iste porro minus debitis, iusto minima repellat doloribus facere itaque architecto. Debitis fuga in eligendi dolorem nihil eum quas sapiente! Vitae fuga deserunt atque tempore voluptatum rerum reprehenderit eaque aspernatur. Fugiat nobis aliquam voluptas distinctio! Corporis cupiditate harum aliquam corrupti distinctio nam.</p>

                <div className="about_img">
                    <img src={aboutimg} alt="" />
                    <img src={aboutimg2} alt="" />
                    <img src={aboutimg3} alt="" />
                    <img src={aboutimg4} alt="" />
                </div>
            </div>

           
        </div>
        {/* end of about */}

        <div className="menu">
            <div className="menu_list">
                <h2>Menu</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iste omnis. Suscipit, accusamus reiciendis. Voluptatem perspiciatis vero impedit, rerum facilis sequi temporibus ipsam, nemo eum quaerat nostrum inventore numquam beatae assumenda dolorum non qui expedita id dolor amet. Omnis, unde consequatur. Aspernatur excepturi debitis beatae voluptas. Architecto, quae deleniti error numquam enim eveniet modi similique qui tempore placeat aliquid non, assumenda vitae impedit maiores tempora excepturi quis odit nam doloremque atque molestiae! Neque nostrum eligendi officiis voluptas dolorum similique tempore veniam non eos nesciunt provident reprehenderit quasi, numquam atque laboriosam voluptates tempora? Dolores atque exercitationem voluptatem sed sequi rem animi.</p>
            </div>

            <div className="menu_img_list">
                <div className="menu_img">
                    <h4>Coffee</h4>
                    <img src={aboutimg5} alt="" />

                    <div className="spans">
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                    </div>
                </div>

                <div className="menu_img">
                    <h4>Coffee</h4>
                    <img src={aboutimg6} alt="" />

                    <div className="spans">
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                        <span>Lorem ipsum dolor sit</span>
                    </div>
                </div>
            </div>
        </div>
        {/* end of menu */}

        <div className="location">
            <div className="location_details">
                <div className="loca">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7067.2979601592315!2d85.31003332446537!3d27.666329983430302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d33b6e45a9%3A0x71eb09ed7c707d70!2sThasikhel%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1665201050442!5m2!1sen!2snp" title='test' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="loca_Details">
                    <p>Thasikhel, Lalitpur</p>
                    <p>+977-9878767678</p>
                </div>
            </div>
        </div>
        {/* end of location */}
    </>
  );
};

export default App;
