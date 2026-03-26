import '../home.css';
import heroVideo from '../assets/heroVideo.mp4';
import aboutImage from '../assets/homeAbout.png';

export default function Home() {
    return (
    <div>
      <div className="backgroundHome">
        <video autoPlay muted playsInline loop id="heroVideo">
            <source src={heroVideo} type="video/mp4">

            </source>
        </video>    
      </div>

    <div className="storeSlider">

        <div className="storeItem1">

        </div>

        <div className="storeItem2">

        </div>

        <div className="storeItem3">

        </div>

        <div className="storeItem4">

        </div>


    </div> 

    <div className="about">
        <div className="aboutInner">
            <img src={aboutImage} alt="Profile Picture"/>
        </div>
        <div className="aboutInner">
            <h1> ABOUT</h1>
            <body> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elit neque, dictum sit amet placerat et, hendrerit sed augue. In tincidunt euismod metus vitae ultricies. Aliquam rutrum ullamcorper urna, eu faucibus turpis ultrices nec. Duis convallis non ante sit amet aliquam. Mauris metus ante, dapibus at maximus non, sodales auctor enim.</body>
        </div>

    </div>

    </div>
              
      
    );
  }