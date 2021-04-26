import React from 'react';
import { Button } from 'react-bootstrap'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';




const MovieList = (props) => {
    const { classes } = props;
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-2'>
					<img src={movie.Poster} alt='movie'></img>
                    
                    
                    <div className='overlay d-flex align-items-center justify-content-center'>
						<Button variant="outline-success" style={{marginRight:'30%'}}> Save</Button>
                        
                        <Tooltip title="Share">
                         <IconButton aria-label="Share" color="secondary">
                         <div    style={{padding:'3%'}} onClick={() => { alert('Shared Succesfully') }}>
                         <InstagramIcon/>
                         </div>
                        </IconButton>
                        </Tooltip>

                        <Tooltip title="Share">
                         <IconButton aria-label="Share" color="inherit">
                         <div    style={{padding:'3%'}} onClick={() => { alert('Shared Succesfully') }}>
                         <FacebookIcon/>
                         </div>
                        </IconButton>
                        </Tooltip>

                        <Tooltip title="Share">
                         <IconButton aria-label="Share" color="primary">
                         <div    style={{padding:'3%'}} onClick={() => { alert('Shared Succesfully') }}>
                         <TwitterIcon/>
                         </div>
                        </IconButton>
                        </Tooltip>
                        
                        
					</div>
                    
                   
				</div>
                
                  
			))}
		</>
        
	);
};

export default MovieList;