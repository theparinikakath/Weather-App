import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INT_URL="https://media.istockphoto.com/id/1186107529/photo/smog-covered-afternoon-view-of-new-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=gW-hubHw6cVGUzZovMSzX3IUlL1cPNzYuR2uN9Yu00g="
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

    return(
        <div className="Weather">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="weather"
        height="140"
        image={info.humidity>80
          ? RAIN_URL 
          : info.temp>15
          ? HOT_URL
          : COLD_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80
            ? <ThunderstormIcon/>
            : info.temp>15
            ? <WbSunnyIcon/>
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature : {info.temp}&deg;C</p>
        <p>Humidity : {info.humidity}</p>
        <p>Minimum Temperature : {info.tempMin}&deg;C</p>
        <p>Maximum Temperature : {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        <p></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}