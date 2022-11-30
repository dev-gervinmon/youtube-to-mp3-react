import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { brown, yellow } from '@mui/material/colors';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 500, background: 'linear-gradient(to left bottom, #E58F50, #332C30)', paddingX: '30px', paddingY: '5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{fontFamily: 'sans-serif', color: yellow[100] }} gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button onClick={() => {window.open(props.link)}} sx={{ ':hover': {bgcolor: brown[700], color: brown[100]}, color: brown[100], backgroundColor: brown[800]}} fullWidth variant="contained" >Download</Button>
      </CardActions>
    </Card>
  );
}