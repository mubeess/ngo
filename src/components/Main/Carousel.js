import { Carousel } from 'antd';

const contentStyle = {
 
};

export default function Carousell(){
    return(
        <Carousel style={{
            width:'100%',
            overflow:'hidden'
        }} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        
      </Carousel>
    )
}