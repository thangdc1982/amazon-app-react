import React from 'react';
import './Home.css';
import ProductInfo from '../Product/ProductInfo';

function Home() {
  return (    
    <div className="home">
      <div className="home-container">
        <div className="home-row">
          <ProductInfo
            id="123456789"
            title="Kurgo Seasonal Tire Tote(TM), (Pack of 4)"            
            price={49.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ub+A0cegL._AC_UL320_.jpg"
          ></ProductInfo> 
          <ProductInfo
            id="121213131"
            title="Tire Chains,Snow Chains for Car,SUV,Truck"            
            price={85.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81mLlAdACRL._AC_UL320_.jpg"
          ></ProductInfo>
          <ProductInfo
            id="123654789"
            title="Hankook Kinergy GT H436 All-Season Radial Tire - 225/45R17 91W"            
            price={149.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/61KixCcERlL._AC_UL320_.jpg"
          ></ProductInfo>
          <ProductInfo
            id="987456321"
            title="Michelin Defender LTX M/S All-Season Radial Tire - 225/065R17 102H"            
            price={248.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81VIgXG1NkL._AC_UL320_.jpg"
          ></ProductInfo>
        </div>
        <div className="home-row">
          <ProductInfo
            id="147852369"
            title="185/55R15 Zeta Antarctica 5 MS 82H Premium Winter Tire"            
            price={109.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/31jlN5Z23RL._AC_UL320_.jpg"
          ></ProductInfo> 
          <ProductInfo
            id="159852789"
            title="Kumho Solus TA11 All-Season Radial Tire - 205/55R16SL 91T"            
            price={114.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/91840mii9zL._AC_UL320_.jpg"
          ></ProductInfo>
          <ProductInfo
            id="369852147"
            title="TK-KLZ 5Pcs Car Wheel Tires Valve Stem Caps for Ford Mustang Car Styling Decorative Accessories"            
            price={10.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/61xysXR0vBL._AC_UL320_.jpg"
          ></ProductInfo>
          <ProductInfo
            id="987456321"
            title="CZC AUTO Digital Tire Inflator Pressure Gauge, LED Display Tyre Deflator Gage with Dual Head Chuck Rubber Hose"            
            price={24.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ycJU6pz8L._AC_UL320_.jpg"
          ></ProductInfo>
        </div>    
        <div className="home-row">
          <ProductInfo
            id="147963258"
            title="RTX Contour Alloy Wheel/Rim Size 17x7.5 Bolt Pattern 5x114.3 Offset 40 Center Bore 73.1 Gunmetal Machined Face "            
            price={146.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/51ZT-nZgFzL._AC_UL320_.jpg"
          ></ProductInfo> 
          <ProductInfo
            id="753269874"
            title='RTX Black Widow Black Machined Wheel 17\" x 7.5\" 5/114.3 42 73.10'            
            price={114.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/714LhaFaQTL._AC_UL320_.jpg"
          ></ProductInfo>
          <ProductInfo
            id="349875214"
            title='Pilot Automotive WH553-16S-BS Spyder 16\" Performance Wheel Cover, Two Tone Black/Silver Finish, (Pack of 4)'
            price={69.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/71mP8HDKawL._AC_UL320_.jpg"
          ></ProductInfo>
          <ProductInfo
            id="945687984"
            title="RTX, Steel Rim, New Aftermarket Wheel, 14x5.5, 4-100, 57.1, 45, black finish X99148N"
            price={24.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/51uleUAPmAL._AC_UL320_.jpg"
          ></ProductInfo>
        </div>    
      </div>    
    </div>
  )
}

export default Home;

